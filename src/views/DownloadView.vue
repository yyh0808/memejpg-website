<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

interface DownloadFile {
  name: string
  url: string
  platform: string // windows, macos, linux
  arch: string // x64, arm64
  format: string // dmg, exe, msi, deb, rpm, appimage
  size?: string
}

const latestVersion = ref<string | null>(null)
const latestRelease = ref<any>(null)
const loadingVersion = ref(true)
const downloads = ref<DownloadFile[]>([])

const inferPlatformFromExt = (ext: string) => {
  const lower = ext.toLowerCase()
  if (lower === 'dmg' || lower === 'pkg') return 'macos'
  if (lower === 'exe' || lower === 'msi') return 'windows'
  if (lower === 'deb' || lower === 'rpm' || lower === 'appimage') return 'linux'
  return 'unknown'
}

// Parse filename (supports legacy formats) and use API-provided URL if present
const parseAsset = (file: { key: string; url?: string }): DownloadFile | null => {
  const filename = file.key

  // 5-segment: Memejpg-1.0.44-windows-standalone-x64.exe
  const match5 = filename.match(/^(.+?)-(\d+\.\d+\.\d+)-(\w+)-(\w+)-(\w+)\.(.+)$/)
  if (match5) {
    const [, , version, platform, type, arch, extension] = match5
    return {
      name: filename,
      url: file.url || `https://github.com/yyh0808/memejpg-app/releases/download/v${version}/${filename}`,
      platform: platform.toLowerCase(),
      arch: arch.toLowerCase(),
      format: extension.toLowerCase(),
    }
  }

  // 3-segment: MemeJPG-1.0.0-arm64.dmg
  const match3 = filename.match(/^(.+?)-(\d+\.\d+\.\d+)-(\w+)\.(.+)$/)
  if (match3) {
    const [, , version, arch, extension] = match3
    const platform = inferPlatformFromExt(extension)
    return {
      name: filename,
      url: file.url || `https://github.com/yyh0808/memejpg-app/releases/download/v${version}/${filename}`,
      platform,
      arch: arch.toLowerCase(),
      format: extension.toLowerCase(),
    }
  }

  // 2-segment: MemeJPG-mac-1.0.0.dmg
  const match2 = filename.match(/^(.+?)-(mac|win|linux|windows|macos)-(\d+\.\d+\.\d+)\.(.+)$/i)
  if (match2) {
    const [, , platformName, version, extension] = match2
    let platform = platformName.toLowerCase()
    if (platform === 'win' || platform === 'windows') platform = 'windows'
    if (platform === 'mac' || platform === 'macos') platform = 'macos'

    let arch = 'x64'
    const lower = filename.toLowerCase()
    if (lower.includes('arm64') || lower.includes('aarch64') || lower.includes('silicon')) {
      arch = 'arm64'
    }

    return {
      name: filename,
      url: file.url || `https://github.com/yyh0808/memejpg-app/releases/download/v${version}/${filename}`,
      platform,
      arch,
      format: extension.toLowerCase(),
    }
  }

  // Fallback: infer from extension only
  const extMatch = filename.match(/\.([^.]+)$/)
  if (extMatch) {
    const extension = extMatch[1]
    const platform = inferPlatformFromExt(extension)
    if (platform === 'unknown') return null

    let arch = 'x64'
    const lower = filename.toLowerCase()
    if (lower.includes('arm64') || lower.includes('aarch64')) {
      arch = 'arm64'
    }

    return {
      name: filename,
      url: file.url || '#',
      platform,
      arch,
      format: extension.toLowerCase(),
    }
  }

  return null
}

// Group downloads by platform
const windowsDownloads = computed(() =>
  downloads.value.filter(d => d.platform === 'windows')
)

const macosDownloads = computed(() =>
  downloads.value.filter(d => d.platform === 'macos')
)

const linuxDownloads = computed(() =>
  downloads.value.filter(d => d.platform === 'linux')
)

// Get primary download for each platform
const getPrimaryDownload = (platform: string) => {
  const platformDownloads = downloads.value.filter(d => d.platform === platform)
  if (platformDownloads.length === 0) return null

  // Prioritize certain formats
  if (platform === 'windows') {
    return platformDownloads.find(d => d.format === 'exe') || platformDownloads[0]
  } else if (platform === 'macos') {
    return platformDownloads.find(d => d.format === 'dmg' && d.arch === 'arm64') || platformDownloads[0]
  } else if (platform === 'linux') {
    return platformDownloads.find(d => d.format === 'appimage') || platformDownloads[0]
  }
  return platformDownloads[0]
}

const getFormatIcon = (format: string) => {
  const icons: Record<string, string> = {
    'exe': 'mdi-microsoft-windows',
    'msi': 'mdi-package-variant',
    'dmg': 'mdi-apple',
    'deb': 'mdi-debian',
    'rpm': 'mdi-redhat',
    'appimage': 'mdi-linux',
  }
  return icons[format.toLowerCase()] || 'mdi-download'
}

const getPlatformIcon = (platform: string) => {
  const icons: Record<string, string> = {
    'windows': 'mdi-microsoft-windows',
    'macos': 'mdi-apple',
    'linux': 'mdi-linux',
  }
  return icons[platform.toLowerCase()] || 'mdi-download'
}

onMounted(async () => {
  try {
    const res = await fetch('/api/versions')
    if (res.ok) {
      const data = await res.json()
      if (data.latest) {
        latestVersion.value = data.latest.version
        latestRelease.value = data.latest

        // Parse all files from the latest release
        if (data.latest.files && Array.isArray(data.latest.files)) {
          downloads.value = data.latest.files
            .map((file: any) => parseAsset({ key: file.key, url: file.url }))
            .filter((f: DownloadFile | null) => f !== null) as DownloadFile[]
        }
      }
    }
  } catch (e) {
    console.warn("Could not fetch latest version", e)
    // Fallback for dev
    if (window.location.hostname === 'localhost') {
      latestVersion.value = "1.0.44 (Dev)"
      // Mock data for testing
      downloads.value = [
        { name: 'Memejpg-1.0.44-windows-standalone-x64.exe', url: '#', platform: 'windows', arch: 'x64', format: 'exe' },
        { name: 'Memejpg-1.0.44-windows-standalone-x64.msi', url: '#', platform: 'windows', arch: 'x64', format: 'msi' },
        { name: 'Memejpg-1.0.44-macos-standalone-arm64.dmg', url: '#', platform: 'macos', arch: 'arm64', format: 'dmg' },
        { name: 'Memejpg-1.0.44-macos-standalone-x64.dmg', url: '#', platform: 'macos', arch: 'x64', format: 'dmg' },
        { name: 'Memejpg-1.0.44-linux-standalone-x64.AppImage', url: '#', platform: 'linux', arch: 'x64', format: 'appimage' },
        { name: 'Memejpg-1.0.44-linux-standalone-x64.deb', url: '#', platform: 'linux', arch: 'x64', format: 'deb' },
        { name: 'Memejpg-1.0.44-linux-standalone-x64.rpm', url: '#', platform: 'linux', arch: 'x64', format: 'rpm' },
      ]
    }
  } finally {
    loadingVersion.value = false
  }
})
</script>

<template>
  <div class="min-h-screen bg-background pt-16 pb-16">
    <v-container>
      <!-- Header Section -->
      <v-row justify="center" align="center" class="pt-8 mb-12">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <div class="position-relative d-inline-block mb-6">
            <div class="position-absolute" style="top:50%; left:50%; transform:translate(-50%, -50%); width: 120px; height: 120px; background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%); filter: blur(20px);"></div>
            <v-img src="/logo.svg" width="80" height="80" class="mx-auto position-relative"></v-img>
          </div>

          <h1 class="text-h3 font-weight-black mb-4 text-high-emphasis font-modern">
            {{ $t('download.title') }}
          </h1>

          <p class="text-subtitle-1 text-medium-emphasis mb-6">
            {{ $t('download.subtitle') }}
          </p>

          <div class="d-flex justify-center align-center gap-2 mb-8">
            <v-chip v-if="loadingVersion" size="small" color="grey">{{ $t('download.loading') }}</v-chip>
            <v-chip v-else-if="latestVersion" color="success" variant="flat" size="default" class="font-weight-bold">
              {{ $t('download.latest') }}: v{{ latestVersion }}
            </v-chip>

            <v-btn to="/history" variant="text" size="small" color="primary" prepend-icon="mdi-history">
              {{ $t('download.history') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Platform Download Sections -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="10" lg="10">

          <!-- Windows -->
          <div class="mb-12">
            <div class="d-flex align-center mb-4">
              <v-icon size="32" color="primary" class="mr-3">mdi-microsoft-windows</v-icon>
              <h2 class="text-h4 font-weight-bold text-high-emphasis font-modern">{{ $t('download.platforms.windows') }}</h2>
            </div>

            <v-row v-if="windowsDownloads.length > 0">
              <v-col v-for="download in windowsDownloads" :key="download.name" cols="12" sm="6" md="4">
                <a :href="download.url" class="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <v-card class="glass-card pa-6 h-100" variant="flat" hover>
                    <div class="d-flex align-center mb-4">
                      <v-icon :icon="getFormatIcon(download.format)" size="40" color="primary" class="mr-3"></v-icon>
                      <div>
                        <div class="text-body-2 text-medium-emphasis text-uppercase">{{ download.arch }}</div>
                        <div class="text-h6 font-weight-bold">.{{ download.format.toUpperCase() }}</div>
                      </div>
                    </div>
                    <v-btn color="primary" block size="large" rounded="lg" prepend-icon="mdi-download">
                      {{ $t(`download.button.${download.format}`) }}
                    </v-btn>
                  </v-card>
                </a>
              </v-col>
            </v-row>
            <v-alert v-else type="info" variant="tonal" class="mt-4">
              {{ $t('download.comingSoon') }}
            </v-alert>
            <div class="text-caption text-medium-emphasis mt-2">
              {{ $t('download.requiresWindows') }}
            </div>
          </div>

          <!-- macOS -->
          <div class="mb-12">
            <div class="d-flex align-center mb-4">
              <v-icon size="32" color="primary" class="mr-3">mdi-apple</v-icon>
              <h2 class="text-h4 font-weight-bold text-high-emphasis font-modern">{{ $t('download.platforms.macos') }}</h2>
            </div>

            <v-row v-if="macosDownloads.length > 0">
              <v-col v-for="download in macosDownloads" :key="download.name" cols="12" sm="6" md="4">
                <a :href="download.url" class="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <v-card class="glass-card pa-6 h-100" variant="flat" hover>
                    <div class="d-flex align-center mb-4">
                      <v-icon :icon="getFormatIcon(download.format)" size="40" color="primary" class="mr-3"></v-icon>
                      <div>
                        <div class="text-body-2 text-medium-emphasis text-uppercase">
                          {{ download.arch === 'arm64' ? $t('download.chip.silicon') : $t('download.chip.intel') }}
                        </div>
                        <div class="text-h6 font-weight-bold">.{{ download.format.toUpperCase() }}</div>
                      </div>
                    </div>
                    <v-btn
                      :color="download.arch === 'arm64' ? 'black' : 'primary'"
                      :variant="download.arch === 'arm64' ? 'flat' : 'outlined'"
                      block
                      size="large"
                      rounded="lg"
                      prepend-icon="mdi-download"
                    >
                      {{ $t(`download.button.${download.format}`) }}
                    </v-btn>
                  </v-card>
                </a>
              </v-col>
            </v-row>
            <v-alert v-else type="info" variant="tonal" class="mt-4">
              {{ $t('download.comingSoon') }}
            </v-alert>
            <div class="text-caption text-medium-emphasis mt-2">
              {{ $t('download.requiresMac') }}
            </div>
          </div>

          <!-- Linux -->
          <div class="mb-8">
            <div class="d-flex align-center mb-4">
              <v-icon size="32" color="primary" class="mr-3">mdi-linux</v-icon>
              <h2 class="text-h4 font-weight-bold text-high-emphasis font-modern">{{ $t('download.platforms.linux') }}</h2>
            </div>

            <v-row v-if="linuxDownloads.length > 0">
              <v-col v-for="download in linuxDownloads" :key="download.name" cols="12" sm="6" md="4">
                <a :href="download.url" class="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <v-card class="glass-card pa-6 h-100" variant="flat" hover>
                    <div class="d-flex align-center mb-4">
                      <v-icon :icon="getFormatIcon(download.format)" size="40" color="primary" class="mr-3"></v-icon>
                      <div>
                        <div class="text-body-2 text-medium-emphasis text-uppercase">{{ download.arch }}</div>
                        <div class="text-h6 font-weight-bold">.{{ download.format.toUpperCase() }}</div>
                      </div>
                    </div>
                    <v-btn color="primary" block size="large" rounded="lg" prepend-icon="mdi-download">
                      {{ $t(`download.button.${download.format}`) }}
                    </v-btn>
                  </v-card>
                </a>
              </v-col>
            </v-row>
            <v-alert v-else type="info" variant="tonal" class="mt-4">
              {{ $t('download.comingSoon') }}
            </v-alert>
            <div class="text-caption text-medium-emphasis mt-2">
              {{ $t('download.requiresLinux') }}
            </div>
          </div>

        </v-col>
      </v-row>

      <!-- Additional Info -->
      <v-row justify="center" class="py-8 border-t">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <p class="text-body-1 text-medium-emphasis mb-4">
            {{ $t('download.designedFor') }}
          </p>
          <v-btn
            href="https://github.com/yyh0808/memejpg-app/releases"
            target="_blank"
            variant="text"
            color="primary"
            prepend-icon="mdi-github"
          >
            View on GitHub
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>
