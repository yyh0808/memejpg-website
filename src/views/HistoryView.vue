<template>
  <v-container class="py-16">
    <div class="mb-8">
      <v-btn to="/download" variant="text" prepend-icon="mdi-arrow-left" class="mb-4">
        Back to Download
      </v-btn>
      <h1 class="text-h3 font-weight-bold text-grey-darken-3 font-modern mb-2">Version History</h1>
      <p class="text-subtitle-1 text-grey-darken-1">Download previous versions of MemeJPG for Mac.</p>
    </div>

    <div v-if="loading" class="d-flex justify-center py-12">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <v-icon color="error" size="48" class="mb-4">mdi-alert-circle</v-icon>
      <p class="text-h6 text-grey-darken-2">Unable to load versions</p>
      <p class="text-body-2 text-grey-darken-1 mb-4">{{ error }}</p>
      <v-btn color="primary" @click="fetchVersions">Retry</v-btn>
    </div>

    <div v-else-if="versions.length === 0" class="text-center py-12">
      <p class="text-h6 text-grey-darken-2">No versions found</p>
    </div>

    <v-card v-else class="border rounded-lg" variant="flat">
      <v-list lines="two">
        <template v-for="(version, index) in versions" :key="version.version">
          <v-list-item class="py-4">
            <template v-slot:prepend>
              <div class="bg-grey-lighten-4 rounded-circle pa-3 mr-4">
                <v-icon color="primary">mdi-tag-outline</v-icon>
              </div>
            </template>

            <v-list-item-title class="text-h6 font-weight-bold mb-1">
              Version {{ version.version }}
            </v-list-item-title>
            
            <v-list-item-subtitle>
              Released on: {{ formatDate(version.date) }}
            </v-list-item-subtitle>

            <template v-slot:append>
              <div class="d-flex flex-column flex-sm-row align-center gap-2">
                 <div v-for="file in version.files" :key="file.arch" class="ma-1">
                    <v-btn
                      :href="file.url" 
                      variant="outlined"
                      size="small"
                      color="primary"
                      prepend-icon="mdi-download"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ formatArch(file.arch) }}
                    </v-btn>
                 </div>
              </div>
            </template>
          </v-list-item>
          <v-divider v-if="index < versions.length - 1"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface VersionFile {
  key: string;
  size: number;
  arch: string;
  url: string;
}

interface Version {
  version: string;
  files: VersionFile[];
  date: string;
}

const versions = ref<Version[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const formatDate = (dateString: string) => {
  if (!dateString) return 'Unknown date';
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    return dateString;
  }
}

const formatArch = (arch: string) => {
  if (arch === 'arm64') return 'Apple Silicon';
  if (arch === 'x64') return 'Intel';
  return 'Universal';
}

const fetchVersions = async () => {
  loading.value = true
  error.value = null
  try {
    // In dev mode, fetch might fail if API is not proxied or running.
    // We can handle local dev fallback or just fail.
    const response = await fetch('/api/versions')
    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`)
    }
    const data = await response.json()
    versions.value = data.versions || [];
  } catch (e: any) {
    console.warn("Failed to fetch versions:", e)
    // For Demo/Dev purposes, if fetch fails (likely locally), mock data?
    // User wants "page function to request R2". Local dev usually doesn't have R2 binding.
    // I will show error but also a small mock for visual verification if needed, 
    // OR just show error. Better to show error so user knows to deploy.
    // BUT to verify UI, I'll add a mock fallback if hostname is localhost.
    if (window.location.hostname === 'localhost') {
        versions.value = [
            {
                version: '1.2.0',
                date: new Date().toISOString(),
                files: [
                    { key: 'mock-arm', size: 1000, arch: 'arm64', url: '#' },
                    { key: 'mock-intel', size: 1000, arch: 'x64', url: '#' }
                ]
            },
            {
                version: '1.1.0',
                date: new Date(Date.now() - 86400000 * 10).toISOString(),
                files: [
                     { key: 'mock-arm', size: 1000, arch: 'arm64', url: '#' }
                ]
            }
        ];
    } else {
         error.value = e.message || 'Failed to load versions'
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchVersions()
})
</script>
