<template>
  <v-container class="py-16">
    <div class="mb-8">
      <v-btn to="/download" variant="text" prepend-icon="mdi-arrow-left" class="mb-4">
        {{ $t('download.backToDownload') }}
      </v-btn>
      <h1 class="text-h3 font-weight-bold text-grey-darken-3 font-modern mb-2">{{ $t('download.versionHistory') }}</h1>
      <p class="text-subtitle-1 text-grey-darken-1">{{ $t('download.versionHistorySubtitle') }}</p>
    </div>

    <div v-if="loading" class="d-flex justify-center py-12">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <v-icon color="error" size="48" class="mb-4">mdi-alert-circle</v-icon>
      <p class="text-h6 text-grey-darken-2">{{ $t('download.unableToLoad') }}</p>
      <p class="text-body-2 text-grey-darken-1 mb-4">{{ error }}</p>
      <v-btn color="primary" @click="fetchVersions">{{ $t('download.retry') }}</v-btn>
    </div>

    <div v-else-if="versions.length === 0" class="text-center py-12">
      <p class="text-h6 text-grey-darken-2">{{ $t('download.noVersionsFound') }}</p>
    </div>

    <div v-else>
      <v-card v-for="version in versions" :key="version.version" class="mb-6 border rounded-lg" variant="flat">
        <v-card-title class="d-flex align-center bg-grey-lighten-4 pa-4">
          <v-icon color="primary" class="mr-3">mdi-tag-outline</v-icon>
          <div>
            <div class="text-h6 font-weight-bold">
              {{ $t('download.version') }} {{ version.version }}
            </div>
            <div class="text-caption text-medium-emphasis">
              {{ $t('download.releasedOn') }} {{ formatDate(version.date) }}
            </div>
          </div>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-row>
            <!-- Windows Downloads -->
            <v-col v-if="groupFilesByPlatform(version.files).windows.length > 0" cols="12" md="4">
              <div class="mb-2 d-flex align-center">
                <v-icon :icon="getPlatformIcon('windows')" size="20" class="mr-2" color="blue"></v-icon>
                <span class="text-subtitle-2 font-weight-bold">{{ $t('download.platforms.windows') }}</span>
              </div>
              <div class="d-flex flex-column gap-2">
                <v-btn
                  v-for="file in groupFilesByPlatform(version.files).windows"
                  :key="file.key"
                  :href="file.url"
                  variant="outlined"
                  size="small"
                  :color="getPlatformColor('windows')"
                  prepend-icon="mdi-download"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="justify-start"
                >
                  <span class="text-caption">{{ getFileLabel(file) }}</span>
                </v-btn>
              </div>
            </v-col>

            <!-- macOS Downloads -->
            <v-col v-if="groupFilesByPlatform(version.files).macos.length > 0" cols="12" md="4">
              <div class="mb-2 d-flex align-center">
                <v-icon :icon="getPlatformIcon('macos')" size="20" class="mr-2" color="grey-darken-2"></v-icon>
                <span class="text-subtitle-2 font-weight-bold">{{ $t('download.platforms.macos') }}</span>
              </div>
              <div class="d-flex flex-column gap-2">
                <v-btn
                  v-for="file in groupFilesByPlatform(version.files).macos"
                  :key="file.key"
                  :href="file.url"
                  variant="outlined"
                  size="small"
                  :color="getPlatformColor('macos')"
                  prepend-icon="mdi-download"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="justify-start"
                >
                  <span class="text-caption">{{ getFileLabel(file) }}</span>
                </v-btn>
              </div>
            </v-col>

            <!-- Linux Downloads -->
            <v-col v-if="groupFilesByPlatform(version.files).linux.length > 0" cols="12" md="4">
              <div class="mb-2 d-flex align-center">
                <v-icon :icon="getPlatformIcon('linux')" size="20" class="mr-2" color="orange"></v-icon>
                <span class="text-subtitle-2 font-weight-bold">{{ $t('download.platforms.linux') }}</span>
              </div>
              <div class="d-flex flex-column gap-2">
                <v-btn
                  v-for="file in groupFilesByPlatform(version.files).linux"
                  :key="file.key"
                  :href="file.url"
                  variant="outlined"
                  size="small"
                  :color="getPlatformColor('linux')"
                  prepend-icon="mdi-download"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="justify-start"
                >
                  <span class="text-caption">{{ getFileLabel(file) }}</span>
                </v-btn>
              </div>
            </v-col>

            <!-- Unknown/Other Downloads -->
            <v-col v-if="groupFilesByPlatform(version.files).unknown.length > 0" cols="12" md="4">
              <div class="mb-2 d-flex align-center">
                <v-icon icon="mdi-download" size="20" class="mr-2" color="grey"></v-icon>
                <span class="text-subtitle-2 font-weight-bold">Other</span>
              </div>
              <div class="d-flex flex-column gap-2">
                <v-btn
                  v-for="file in groupFilesByPlatform(version.files).unknown"
                  :key="file.key"
                  :href="file.url"
                  variant="outlined"
                  size="small"
                  color="grey"
                  prepend-icon="mdi-download"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="justify-start"
                >
                  <span class="text-caption">{{ getFileLabel(file) }}</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

interface VersionFile {
  key: string
  size: number
  arch: string
  platform?: string
  format?: string
  url: string
}

interface Version {
  version: string
  files: VersionFile[]
  date: string
}

const versions = ref<Version[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const { t } = useI18n()

// Parse filename - support multiple formats for backwards compatibility
const parseFilename = (filename: string) => {
  // Try 5-segment format: Memejpg-1.0.44-windows-standalone-x64.exe
  const match5 = filename.match(/^(.+?)-(\d+\.\d+\.\d+)-(\w+)-(\w+)-(\w+)\.(.+)$/)
  if (match5) {
    const platform = match5[3]
    const arch = match5[5]
    const extension = match5[6]
    return {
      platform: platform.toLowerCase(),
      arch: arch.toLowerCase(),
      format: extension.toLowerCase(),
    }
  }

  // Try 3-segment format: MemeJPG-1.0.0-arm64.dmg or MemeJPG-1.0.0-x64.dmg
  const match3 = filename.match(/^(.+?)-(\d+\.\d+\.\d+)-(\w+)\.(.+)$/)
  if (match3) {
    const arch = match3[3]
    const extension = match3[4]
    const ext = extension.toLowerCase()

    // Infer platform from extension
    let platform = 'unknown'
    if (ext === 'dmg' || ext === 'pkg') {
      platform = 'macos'
    } else if (ext === 'exe' || ext === 'msi') {
      platform = 'windows'
    } else if (ext === 'deb' || ext === 'rpm' || ext === 'appimage') {
      platform = 'linux'
    }

    return {
      platform,
      arch: arch.toLowerCase(),
      format: ext,
    }
  }

  // Try old 2-segment format with platform in name: MemeJPG-mac-1.0.0.dmg
  const match2 = filename.match(/^(.+?)-(mac|win|linux|windows|macos)-(\d+\.\d+\.\d+)\.(.+)$/i)
  if (match2) {
    const platformName = match2[2]
    const extension = match2[4]
    const ext = extension.toLowerCase()
    let platform = platformName.toLowerCase()
    if (platform === 'win' || platform === 'windows') platform = 'windows'
    if (platform === 'mac' || platform === 'macos') platform = 'macos'

    // Try to infer arch from filename or default to x64
    let arch = 'x64'
    if (filename.includes('arm64') || filename.includes('silicon')) {
      arch = 'arm64'
    } else if (filename.includes('intel')) {
      arch = 'x64'
    }

    return {
      platform,
      arch,
      format: ext,
    }
  }

  // Fallback: try to infer from extension only
  const extMatch = filename.match(/\.([^.]+)$/)
  if (extMatch) {
    const ext = extMatch[1].toLowerCase()
    let platform = 'unknown'

    if (ext === 'dmg' || ext === 'pkg') {
      platform = 'macos'
    } else if (ext === 'exe' || ext === 'msi') {
      platform = 'windows'
    } else if (ext === 'deb' || ext === 'rpm' || ext === 'appimage') {
      platform = 'linux'
    }

    // Try to detect arch
    let arch = 'x64'
    if (filename.toLowerCase().includes('arm64') || filename.toLowerCase().includes('aarch64')) {
      arch = 'arm64'
    }

    return {
      platform,
      arch,
      format: ext,
    }
  }

  // If nothing matched, return a default so the file is still shown
  return {
    platform: 'unknown',
    arch: 'unknown',
    format: 'unknown',
  }
}

const formatDate = (dateString: string) => {
  if (!dateString) return t('download.unknownDate')
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return dateString
  }
}

const getFileLabel = (file: VersionFile) => {
  const parts = []

  // If we can't determine platform/arch/format, just show the filename
  if (file.platform === 'unknown' && file.arch === 'unknown') {
    return file.key || 'Download'
  }

  // Platform
  if (file.platform && file.platform !== 'unknown') {
    parts.push(file.platform.charAt(0).toUpperCase() + file.platform.slice(1))
  }

  // Architecture
  if (file.arch && file.arch !== 'unknown') {
    if (file.arch === 'arm64' && file.platform === 'macos') {
      parts.push('Apple Silicon')
    } else if (file.arch === 'x64' && file.platform === 'macos') {
      parts.push('Intel')
    } else {
      parts.push(file.arch.toUpperCase())
    }
  }

  // Format
  if (file.format && file.format !== 'unknown') {
    parts.push(`.${file.format.toUpperCase()}`)
  }

  // If no parts were added, show filename
  return parts.length > 0 ? parts.join(' • ') : (file.key || 'Download')
}

const getPlatformIcon = (platform: string) => {
  const icons: Record<string, string> = {
    'windows': 'mdi-microsoft-windows',
    'macos': 'mdi-apple',
    'linux': 'mdi-linux',
  }
  return icons[platform?.toLowerCase()] || 'mdi-download'
}

const getPlatformColor = (platform: string) => {
  const colors: Record<string, string> = {
    'windows': 'blue',
    'macos': 'grey-darken-2',
    'linux': 'orange',
  }
  return colors[platform?.toLowerCase()] || 'primary'
}

// Group files by platform
const groupFilesByPlatform = (files: VersionFile[]) => {
  const grouped: Record<string, VersionFile[]> = {
    windows: [],
    macos: [],
    linux: [],
    unknown: [],
  }

  files.forEach(file => {
    const platform = file.platform || 'unknown'
    if (grouped[platform]) {
      grouped[platform].push(file)
    } else {
      grouped.unknown.push(file)
    }
  })

  return grouped
}

const fetchVersions = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await fetch('/api/versions')
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }
    const data = await response.json()

    // Parse files and add platform/format info
    if (data.versions) {
      versions.value = data.versions.map((version: Version) => ({
        ...version,
        files: version.files.map(file => {
          const parsed = parseFilename(file.key)
          return {
            ...file,
            ...parsed,
          }
        }),
      }))
    }
  } catch (err) {
    console.warn("Failed to fetch versions:", err)

    if (window.location.hostname === 'localhost') {
      // Mock data for testing - multiple versions with different file formats
      versions.value = [
        {
          version: '1.0.44',
          date: new Date().toISOString(),
          files: [
            { key: 'Memejpg-1.0.44-windows-standalone-x64.exe', size: 4050000, arch: 'x64', platform: 'windows', format: 'exe', url: '#' },
            { key: 'Memejpg-1.0.44-windows-standalone-x64.msi', size: 5750000, arch: 'x64', platform: 'windows', format: 'msi', url: '#' },
            { key: 'Memejpg-1.0.44-macos-standalone-arm64.dmg', size: 6380000, arch: 'arm64', platform: 'macos', format: 'dmg', url: '#' },
            { key: 'Memejpg-1.0.44-macos-standalone-x64.dmg', size: 6630000, arch: 'x64', platform: 'macos', format: 'dmg', url: '#' },
            { key: 'Memejpg-1.0.44-linux-standalone-x64.AppImage', size: 80000000, arch: 'x64', platform: 'linux', format: 'appimage', url: '#' },
            { key: 'Memejpg-1.0.44-linux-standalone-x64.deb', size: 6440000, arch: 'x64', platform: 'linux', format: 'deb', url: '#' },
            { key: 'Memejpg-1.0.44-linux-standalone-x64.rpm', size: 6440000, arch: 'x64', platform: 'linux', format: 'rpm', url: '#' },
          ]
        },
        {
          version: '1.0.30',
          date: new Date(Date.now() - 86400000 * 7).toISOString(),
          files: [
            { key: 'MemeJPG-1.0.30-arm64.dmg', size: 6200000, arch: 'arm64', platform: 'macos', format: 'dmg', url: '#' },
            { key: 'MemeJPG-1.0.30-x64.dmg', size: 6400000, arch: 'x64', platform: 'macos', format: 'dmg', url: '#' },
          ]
        },
        {
          version: '1.0.20',
          date: new Date(Date.now() - 86400000 * 14).toISOString(),
          files: [
            { key: 'MemeJPG-mac-1.0.20.dmg', size: 5800000, arch: 'x64', platform: 'macos', format: 'dmg', url: '#' },
          ]
        },
      ]
    } else {
      error.value = err instanceof Error ? err.message : 'Failed to load versions'
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchVersions()
})
</script>
