<template>
  <v-container fluid>
    <!-- Hero Section -->
    <v-row class="align-center justify-center py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <v-col cols="12" md="8" class="text-center">
        <v-img
          :src="heroImage"
          alt="MemeJPG Logo"
          class="mx-auto mb-6"
          max-width="120"
          contain
        ></v-img>

        <h1 class="text-h3 font-weight-bold text-primary mb-3">Welcome to MemeJPG</h1>

        <p class="text-h6 text-grey-darken-1 mb-6">Handle all your image editing needs</p>

        <v-btn
          color="primary"
          size="large"
          variant="elevated"
          prepend-icon="mdi-rocket-launch"
          @click="scrollToTools"
        >
          Explore Tools
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tools Section -->
    <v-row id="tools-section" class="py-16">
      <v-col cols="12">
        <h2 class="text-h3 text-center font-weight-bold mb-12">Our Image Editing Tools</h2>
      </v-col>

      <v-col v-for="tool in tools" :key="tool.id" cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto tool-card" max-width="350" elevation="4" hover>
          <v-card-item>
            <div class="d-flex align-center justify-center mb-4">
              <v-avatar size="80" color="primary">
                <v-icon size="40" color="white">{{ tool.icon }}</v-icon>
              </v-avatar>
            </div>

            <v-card-title class="text-center">
              {{ tool.name }}
            </v-card-title>

            <v-card-subtitle class="text-center">
              {{ tool.description }}
            </v-card-subtitle>
          </v-card-item>

          <v-card-actions class="justify-center pb-4">
            <v-btn
              :href="tool.url"
              target="_blank"
              color="primary"
              variant="outlined"
              :disabled="!tool.available"
            >
              {{ tool.available ? 'Try Now' : 'Coming Soon' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Features Section -->
    <v-row class="py-16 bg-grey-lighten-4">
      <v-col cols="12">
        <h2 class="text-h3 text-center font-weight-bold mb-12">Why Choose MemeJPG?</h2>
      </v-col>

      <v-col v-for="feature in features" :key="feature.title" cols="12" md="4">
        <div class="text-center">
          <v-avatar size="100" color="secondary" class="mb-4">
            <v-icon size="50" color="white">{{ feature.icon }}</v-icon>
          </v-avatar>

          <h3 class="text-h5 font-weight-bold mb-3">
            {{ feature.title }}
          </h3>

          <p class="text-body-1 text-grey-darken-1">
            {{ feature.description }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const heroImage = '/favicon.ico'

const tools = ref([
  {
    id: 1,
    name: 'Background Remover',
    description: 'Remove backgrounds from images in batches automatically',
    icon: 'mdi-image-filter-hdr',
    url: 'https://removebg.memejpg.com/',
    available: true,
  },
  {
    id: 2,
    name: 'Font Compressor',
    description: 'Compress font package sizes for better web performance',
    icon: 'mdi-format-font',
    url: 'https://fontcompressor.memejpg.com/',
    available: true,
  },
  {
    id: 3,
    name: 'Image Renamer',
    description: 'Rename multiple images in batches efficiently',
    icon: 'mdi-rename-box',
    url: 'https://rename.memejpg.com/',
    available: true,
  },
  {
    id: 4,
    name: 'Image Resizer',
    description: 'Resize and crop images in batches to specific dimensions',
    icon: 'mdi-resize',
    url: 'https://resize.memejpg.com/',
    available: true,
  },
  {
    id: 5,
    name: 'Image Compressor',
    description: 'Compress image file sizes in batches without losing quality',
    icon: 'mdi-compress',
    url: 'https://compress.memejpg.com/',
    available: true,
  },
  {
    id: 6,
    name: 'ICO Converter',
    description: 'Convert images to ICO format for favicon creation',
    icon: 'mdi-file-image',
    url: 'https://ico.memejpg.com/',
    available: true,
  },
  {
    id: 7,
    name: 'Image Beautifier',
    description: 'Enhance and beautify multiple images with AI filters',
    icon: 'mdi-auto-fix',
    url: 'https://beauty.memejpg.com/',
    available: true,
  },
])

const features = ref([
  {
    title: 'Fast & Efficient',
    description: 'Lightning-fast processing with optimized algorithms for quick results.',
    icon: 'mdi-lightning-bolt',
  },
  {
    title: 'Privacy First',
    description: 'All processing happens in your browser. Your images never leave your device.',
    icon: 'mdi-shield-check',
  },
  {
    title: 'Free to Use',
    description: 'All our tools are completely free with no hidden costs or subscriptions.',
    icon: 'mdi-heart',
  },
])

const scrollToTools = () => {
  const element = document.getElementById('tools-section')
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.tool-card {
  transition: transform 0.3s ease-in-out;
}

.tool-card:hover {
  transform: translateY(-5px);
}
</style>
