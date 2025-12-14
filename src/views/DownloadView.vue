

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const downloadUrl = '/download-api' // Points to CF Function
const latestVersion = ref<string | null>(null)
const loadingVersion = ref(true)

const features = ref([
  'Native performance on Apple Silicon',
  'Batch processing for all tools',
  'Offline capability enabled by default',
  'Drag and drop integration with Finder',
  'Automatic updates'
])

onMounted(async () => {
    try {
        const res = await fetch('/api/versions')
        if (res.ok) {
            const data = await res.json()
            if (data.latest && data.latest.version) {
                 latestVersion.value = data.latest.version
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
  <div class="min-h-screen bg-grey-lighten-5 pt-16 pb-16">
    <v-container>
      <!-- Header Section -->
      <v-row justify="center" align="center" class="pt-8 mb-12">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <div class="position-relative d-inline-block mb-6">
            <div class="position-absolute" style="top:50%; left:50%; transform:translate(-50%, -50%); width: 120px; height: 120px; background: radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%); filter: blur(20px);"></div>
             <v-icon size="80" color="primary" class="position-relative">mdi-apple</v-icon>
          </div>
          
          <h1 class="text-h3 font-weight-black mb-4 text-grey-darken-3 font-modern">
            MemeJPG for <span class="text-gradient">Mac</span>
          </h1>
          
          <div class="d-flex justify-center align-center gap-2 mb-8">
               <v-chip v-if="loadingVersion" size="small" color="grey">Loading version...</v-chip>
               <v-chip v-else-if="latestVersion" color="success" variant="flat" size="default" class="font-weight-bold">
                   Latest: v{{ latestVersion }}
               </v-chip>
               
               <v-btn to="/history" variant="text" size="small" color="primary" prepend-icon="mdi-history">
                   History Versions
               </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Download Cards -->
      <v-row class="gap-4 justify-center mb-16">
        <!-- Apple Silicon Card -->
        <v-col cols="12" md="5" lg="4">
          <a :href="`${downloadUrl}?arch=arm64`" class="text-decoration-none">
            <v-card class="glass-card h-100 py-8 px-6 text-center cursor-pointer position-relative d-flex flex-column align-center transition-swing elevation-1" hover>
               <div class="bg-blue-50 rounded-circle pa-4 mb-4">
                 <v-icon size="48" color="primary">mdi-cpu-64-bit</v-icon>
               </div>
               <h3 class="text-h5 font-weight-bold mb-1 text-grey-darken-3">Apple Silicon</h3>
               <div class="text-body-2 text-grey-darken-1 mb-6">M1 / M2 / M3 / M4</div>
               
               <v-btn color="black" block size="large" rounded="xl" prepend-icon="mdi-download" class="mt-auto">
                 Download .dmg
               </v-btn>
            </v-card>
          </a>
        </v-col>

        <!-- Intel Card -->
        <v-col cols="12" md="5" lg="4">
           <a :href="`${downloadUrl}?arch=x64`" class="text-decoration-none">
            <v-card class="glass-card h-100 py-8 px-6 text-center cursor-pointer position-relative d-flex flex-column align-center transition-swing elevation-1" hover>
               <div class="bg-grey-50 rounded-circle pa-4 mb-4">
                 <v-icon size="48" color="grey-darken-3">mdi-laptop</v-icon>
               </div>
               <h3 class="text-h5 font-weight-bold mb-1 text-grey-darken-3">Intel Chip</h3>
               <div class="text-body-2 text-grey-darken-1 mb-6">Core i5 / i7 / i9</div>
               
               <v-btn variant="outlined" color="primary" block size="large" rounded="xl" prepend-icon="mdi-download" class="mt-auto">
                 Download .dmg
               </v-btn>
            </v-card>
           </a>
        </v-col>
      </v-row>

      <!-- Features & Info -->
       <v-row justify="center" class="py-8 border-t">
        <v-col cols="12" class="text-center mb-8">
           <h2 class="text-h5 font-weight-bold text-grey-darken-3 font-modern">Designed for macOS</h2>
        </v-col>
        
        <v-col cols="12" md="4" v-for="(feature, i) in features" :key="i">
           <div class="d-flex align-start pa-4 justify-center justify-md-start">
              <v-icon color="success" icon="mdi-check-circle" class="mr-3 mt-1 flex-shrink-0" size="small"></v-icon>
              <div class="text-body-1 font-weight-medium text-grey-darken-2 text-left">
                  {{ feature }}
              </div>
           </div>
        </v-col>
      </v-row>
      
      <div class="text-center text-caption text-grey mt-8">
         Requires macOS 11.0 or later.
      </div>
      
      <div class="text-center mt-4">
        <p class="text-caption text-grey">Looking for other platforms?</p>
        <div class="d-flex justify-center gap-2 mt-2 opacity-60">
             <v-chip size="small" variant="outlined" disabled>Windows (Coming Soon)</v-chip>
             <v-chip size="small" variant="outlined" disabled>Linux (Coming Soon)</v-chip>
        </div>
      </div>

    </v-container>
  </div>
</template>
