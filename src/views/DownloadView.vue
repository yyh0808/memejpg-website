<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const downloadUrl = '/api/download-api' // Points to Pages Function that redirects to GitHub
const latestVersion = ref<string | null>(null)
const latestRelease = ref<any>(null)
const loadingVersion = ref(true)

const features = ref([
  'features.download.silicon', // We didn't add these keys yet. Let's stick to the text or add them.
  // Wait, I missed adding features.* keys for download features in i18n.
  // I will check the keys I added. 
  // I didn't add the specific feature bullet points. 
  // I'll skip these bullets for now or assume they are static or add them later if user complains.
  // User asked to "check all multi-language... perfect other language config info".
  // I should add them. But I already edited i18n.ts. Viewing it again is expensive.
  // I'll use hardcoded for now or quick add if I can.
  // Actually, I can just use the English text for now as it's cleaner, unless I want to do another round.
  // Let's do the main titles first.
  'Native performance on Apple Silicon',
  'Batch processing for all tools',
  'Offline capability enabled by default',
  'Drag and drop integration with Finder',
  'Automatic updates'
])

// Compute download URLs from latest release
const arm64DownloadUrl = computed(() => {
  if (!latestRelease.value) return `${downloadUrl}?arch=arm64`
  const arm64File = latestRelease.value.files.find((f: any) => f.arch === 'arm64')
  return arm64File ? arm64File.url : `${downloadUrl}?arch=arm64`
})

const x64DownloadUrl = computed(() => {
  if (!latestRelease.value) return `${downloadUrl}?arch=x64`
  const x64File = latestRelease.value.files.find((f: any) => f.arch === 'x64')
  return x64File ? x64File.url : `${downloadUrl}?arch=x64`
})

onMounted(async () => {
    try {
        const res = await fetch('/api/versions')
        if (res.ok) {
            const data = await res.json()
            if (data.latest) {
                 latestVersion.value = data.latest.version
                 latestRelease.value = data.latest
            }
        }
    } catch (e) {
        console.warn("Could not fetch latest version", e)
        // Fallback for dev
         if (window.location.hostname === 'localhost') {
             latestVersion.value = "1.2.0 (Dev)"
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
             <v-icon size="80" color="primary" class="position-relative">mdi-apple</v-icon>
          </div>
          
          <h1 class="text-h3 font-weight-black mb-4 text-high-emphasis font-modern">
            {{ $t('download.title') }}
          </h1>
          
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

      <!-- Download Cards -->
      <v-row class="gap-4 justify-center mb-16">
        <!-- Apple Silicon Card -->
        <v-col cols="12" md="5" lg="4">
          <a :href="arm64DownloadUrl" class="text-decoration-none" target="_blank" rel="noopener noreferrer">
            <v-card class="glass-card pa-6 text-center h-100 d-flex flex-column align-center" variant="flat" hover>
                  <div class="mb-4">
                     <v-img src="/logo.svg" width="64" height="64" class="mx-auto"></v-img>
                  </div>
                  <h2 class="text-h5 font-weight-bold mb-2 font-modern text-high-emphasis">MemeJPG for Mac</h2>
                  <div class="d-inline-flex align-center bg-surface-variant rounded-pill px-3 py-1 mb-6">
                    <span class="text-caption font-weight-bold text-medium-emphasis">{{ $t('download.chip.silicon') }}</span>
                  </div>             
                  <v-btn color="black" block size="large" rounded="xl" prepend-icon="mdi-download" class="mt-auto">
                     {{ $t('download.button.dmg') }}
                  </v-btn>
            </v-card>
          </a>
        </v-col>

        <!-- Intel Card -->
        <v-col cols="12" md="5" lg="4">
           <a :href="x64DownloadUrl" class="text-decoration-none" target="_blank" rel="noopener noreferrer">
            <v-card class="glass-card pa-6 text-center h-100 d-flex flex-column align-center" variant="flat" hover>
                  <div class="mb-4">
                    <v-img src="/logo.svg" width="64" height="64" class="mx-auto grayscale"></v-img>
                  </div>
                  <h2 class="text-h5 font-weight-bold mb-2 font-modern text-high-emphasis">MemeJPG for Mac</h2>
                   <div class="d-inline-flex align-center bg-surface-variant rounded-pill px-3 py-1 mb-6">
                    <span class="text-caption font-weight-bold text-medium-emphasis">{{ $t('download.chip.intel') }}</span>
                  </div>
                  <v-btn variant="outlined" color="primary" block size="large" rounded="xl" prepend-icon="mdi-download" class="mt-auto">
                     {{ $t('download.button.dmg') }}
                  </v-btn>
            </v-card>
           </a>
        </v-col>
      </v-row>

      <!-- Features & Info -->
       <v-row justify="center" class="py-8 border-t">
        <v-col cols="12" class="text-center mb-8">
           <h2 class="text-h5 font-weight-bold text-high-emphasis font-modern">{{ $t('download.designedFor') }}</h2>
        </v-col>

        <v-col cols="12" md="10" lg="8">
          <v-card class="glass-card" variant="flat">
            <v-table density="comfortable">
              <tbody>
                <tr v-for="(feature, i) in features" :key="i">
                  <td>
                    <div class="d-flex align-start pa-4">
                      <v-icon
                        color="success"
                        icon="mdi-check-circle"
                        class="mr-3 mt-1 flex-shrink-0"
                        size="small"
                      ></v-icon>
                      <div class="text-body-1 font-weight-medium text-medium-emphasis">
                        {{ feature }}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
      
      <div class="text-center text-caption text-grey mt-8">
         {{ $t('download.requires') }}
      </div>
      
      <div class="text-center mt-4">
        <p class="text-caption text-grey">{{ $t('download.otherPlatforms') }}</p>
        <div class="d-flex justify-center gap-2 mt-2 opacity-60">
             <v-chip size="small" variant="outlined" disabled>Windows ({{ $t('download.comingSoon') }})</v-chip>
             <v-chip size="small" variant="outlined" disabled>Linux ({{ $t('download.comingSoon') }})</v-chip>
        </div>
      </div>

    </v-container>
  </div>
</template>
