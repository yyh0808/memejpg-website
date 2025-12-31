<template>
  <v-container fluid class="pa-0">
    <!-- Modern Hero Section -->
    <div class="hero-gradient pt-16 pb-16 pt-md-24 pb-md-24 px-4 position-relative">
      <v-container>
        <v-row class="align-center justify-center position-relative" style="z-index: 1;">
          <v-col cols="12" md="10" lg="8" class="text-center">
             <div class="d-inline-flex align-center glass-effect px-4 py-1 rounded-pill mb-6 border">
                <v-icon icon="mdi-star" color="amber" size="small" class="mr-2"></v-icon>
                <span class="text-caption font-weight-bold text-high-emphasis">{{ $t('hero.newApp') }}</span>
             </div>
            
            <h1 class="text-h3 text-md-h2 font-weight-black text-high-emphasis mb-4 font-modern lh-tight">
              {{ $t('home.heroTitle') }}
              <div class="text-gradient">{{ $t('home.heroTitleHighlight') }}</div>
            </h1>

            <p class="text-h6 text-medium-emphasis mb-8 font-weight-regular" style="max-width: 600px; margin: 0 auto;">
              {{ $t('hero.subtitle') || $t('home.heroSubtitleFallback') }}
            </p>

            <div class="d-flex justify-center flex-wrap" style="gap: 16px;">
              <v-btn
                color="primary"
                size="large"
                class="btn-gradient-primary px-8 hero-cta-btn"
                rounded="xl"
                height="54"
                to="/tools"
              >
                {{ $t('home.freeOnlineTools') }}
              </v-btn>
              
              <v-btn
                to="/download"
                variant="outlined"
                color="white"
                class="bg-white text-grey-darken-3 px-8 border-opacity-100 hero-cta-btn"
                rounded="xl"
                height="54"
                prepend-icon="mdi-apple"
                style="border-color: #e5e7eb;"
              >
                {{ $t('home.downloadForMac') }}
              </v-btn>
            </div>
            
            <!-- Hero Visual Abstract -->
            <div class="mt-8 d-none d-md-block opacity-50">
               <!-- Abstract placeholder or small visual could go here, keeping it clean for now -->
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Tools Section -->
    <v-container id="tools-section" class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
           <h2 class="text-subtitle-1 font-weight-bold text-primary text-uppercase mb-2 font-modern tracking-wide">{{ $t('home.ourTools') }}</h2>
           <h3 class="text-h4 font-weight-bold text-high-emphasis font-modern mb-4">{{ $t('tools.title') }}</h3>
           <p class="text-body-1 text-medium-emphasis">{{ $t('home.professionalTools') }}</p>
        </v-col>

        <v-col v-for="tool in tools" :key="tool.id" cols="12" sm="6" md="4" lg="3">
          <a :href="tool.url" target="_blank" class="text-decoration-none">
            <v-card class="glass-card h-100 pa-4" variant="flat">
                <div class="d-flex align-center mb-4">
                  <div class="rounded-lg pa-3 bg-surface-variant text-primary mr-4">
                    <v-icon size="28">{{ tool.icon }}</v-icon>
                  </div>
                </div>
                
                <h3 class="text-h6 font-weight-bold text-high-emphasis mb-2 font-modern">
                    {{ $t(tool.nameKey) }}
                </h3>
  
                <p class="text-body-2 text-medium-emphasis mb-4 line-clamp-2">
                  {{ $t(tool.descriptionKey) }}
                </p>
                
                <div class="d-flex align-center text-primary text-caption font-weight-bold">
                   <span class="mr-1">{{ tool.available ? $t('tools.launchTool') : $t('tools.comingSoon') }}</span>
                   <v-icon size="small" icon="mdi-arrow-right"></v-icon>
                </div>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </v-container>

    <!-- Features Section -->
    <div class="bg-surface-variant py-16 border-t border-b">
       <v-container>
        <v-row class="text-center">
            <v-col cols="12" md="4" v-for="(feature, i) in features" :key="i" class="px-4">
               <div class="bg-surface rounded-circle pa-6 d-inline-block mb-6 shadow-sm">
                 <v-icon size="40" color="primary">{{ feature.icon }}</v-icon>
               </div>
               <h3 class="text-h5 font-weight-bold mb-3 text-high-emphasis font-modern">
                 {{ $t(feature.titleKey) }}
               </h3>
                <p class="text-body-1 text-medium-emphasis px-8">
                {{ $t(feature.descriptionKey) }}
              </p>
            </v-col>
        </v-row>
       </v-container>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tools as toolsData } from '../data/tools'

// Use first 8 tools for home page, or all? User said "put all online sub-functional websites on homepage... again with card style".
// The user said "Tool list page... display all online sub-function websites on homepage again".
// Actually, the user said "click to enter a new page, tool list page, display all online sub-function websites on homepage again".
// This implies the Tool List page has ALL. The Homepage might already have them.
// Looking at HomeView.vue previously, it had a long list.
// I will just use the imported data.
const tools = ref(toolsData)

const features = ref([
  {
    titleKey: 'features.fast.title',
    descriptionKey: 'features.fast.description',
    icon: 'mdi-lightning-bolt',
  },
  {
    titleKey: 'features.privacy.title',
    descriptionKey: 'features.privacy.description',
    icon: 'mdi-shield-check',
  },
  {
    titleKey: 'features.free.title',
    descriptionKey: 'features.free.description',
    icon: 'mdi-heart',
  },
])
</script>

<style scoped>
.hero-cta-btn {
  border-radius: 32px !important;
}

.tool-card {
  transition: transform 0.3s ease-in-out;
}

.tool-card:hover {
  transform: translateY(-5px);
}
</style>
