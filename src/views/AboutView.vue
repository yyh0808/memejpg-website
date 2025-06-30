<template>
  <v-container class="py-16">
    <!-- Header Section -->
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h1 class="text-h2 font-weight-bold text-primary mb-4">
          About MemeJPG
        </h1>
        <p class="text-h6 text-grey-darken-1 max-w-3xl mx-auto">
          Your one-stop destination for all image editing needs. We provide powerful, free, and privacy-focused tools that work entirely in your browser.
        </p>
      </v-col>
    </v-row>

    <!-- Mission Section -->
    <v-row class="mb-16">
      <v-col cols="12" md="6" class="d-flex align-center">
        <div>
          <h2 class="text-h3 font-weight-bold mb-4">Our Mission</h2>
          <p class="text-body-1 text-grey-darken-1 mb-4">
            At MemeJPG, we believe that powerful image editing tools should be accessible to everyone. Our mission is to provide high-quality, browser-based image processing tools that respect your privacy and don't require any downloads or subscriptions.
          </p>
          <p class="text-body-1 text-grey-darken-1">
            Whether you're creating memes, optimizing images for the web, or just need quick image edits, we've got you covered with our suite of easy-to-use tools.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-card class="pa-8" elevation="4" max-width="400">
          <v-icon size="120" color="primary" class="d-block mx-auto mb-4">
            mdi-image-edit
          </v-icon>
          <h3 class="text-h5 text-center font-weight-bold">
            Simple. Fast. Secure.
          </h3>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tools Overview Section -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">Our Tools</h2>
      </v-col>
      
      <v-col
        v-for="tool in toolsDetail"
        :key="tool.name"
        cols="12"
        md="6"
        class="mb-8"
      >
        <v-card elevation="2" class="h-100">
          <v-card-item>
            <div class="d-flex align-center mb-4">
              <v-avatar size="60" color="primary" class="mr-4">
                <v-icon size="30" color="white">{{ tool.icon }}</v-icon>
              </v-avatar>
              <div>
                <v-card-title class="pa-0">{{ tool.name }}</v-card-title>
                <v-chip
                  :color="tool.status === 'Available' ? 'success' : 'warning'"
                  size="small"
                  variant="flat"
                >
                  {{ tool.status }}
                </v-chip>
              </div>
            </div>
            
            <v-card-text class="pa-0">
              <p class="text-body-1 mb-3">{{ tool.description }}</p>
              
              <h4 class="text-subtitle-1 font-weight-bold mb-2">Features:</h4>
              <ul class="text-body-2">
                <li v-for="feature in tool.features" :key="feature" class="mb-1">
                  {{ feature }}
                </li>
              </ul>
            </v-card-text>
          </v-card-item>

          <v-card-actions class="justify-center pb-4">
            <v-btn
              :href="tool.url"
              target="_blank"
              color="primary"
              variant="elevated"
              prepend-icon="mdi-open-in-new"
            >
              Try Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Values Section -->
    <v-row class="py-16 bg-grey-lighten-4 rounded-lg">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-12">Why We're Different</h2>
      </v-col>
      
      <v-col
        v-for="value in values"
        :key="value.title"
        cols="12"
        md="4"
        class="text-center"
      >
        <v-avatar size="80" :color="value.color" class="mb-4">
          <v-icon size="40" color="white">{{ value.icon }}</v-icon>
        </v-avatar>
        
        <h3 class="text-h5 font-weight-bold mb-3">{{ value.title }}</h3>
        <p class="text-body-1 text-grey-darken-1">{{ value.description }}</p>
      </v-col>
    </v-row>

    <!-- Contact Section -->
    <v-row class="mt-16">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 font-weight-bold mb-4">Get in Touch</h2>
        <p class="text-body-1 text-grey-darken-1 mb-6">
          Have questions, suggestions, or want to contribute? We'd love to hear from you!
        </p>
        
        <div class="d-flex justify-center flex-wrap gap-4">
          <v-btn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-github"
            href="https://github.com"
            target="_blank"
          >
            GitHub
          </v-btn>
          
          <v-btn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-email"
            href="mailto:contact@memejpg.com"
          >
            Email Us
          </v-btn>
          
          <v-btn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-twitter"
            href="https://twitter.com"
            target="_blank"
          >
            Twitter
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toolsDetail = ref([
  {
    name: 'Background Remover',
    description: 'Automatically remove backgrounds from multiple images in batches using advanced AI technology.',
    icon: 'mdi-image-filter-hdr',
    status: 'Available',
    url: 'https://removebg.memejpg.com/',
    features: [
      'Batch processing for multiple images',
      'AI-powered background removal',
      'High-quality transparent PNG output',
      'Support for various image formats',
      'No manual editing required'
    ]
  },
  {
    name: 'Font Compressor',
    description: 'Optimize font file sizes for faster web loading while maintaining text quality and readability.',
    icon: 'mdi-format-font',
    status: 'Available',
    url: 'https://fontcompressor.memejpg.com/',
    features: [
      'Significant file size reduction',
      'Maintains font quality and readability',
      'Support for multiple font formats',
      'Web performance optimization',
      'Batch font processing'
    ]
  },
  {
    name: 'Image Renamer',
    description: 'Efficiently rename multiple images at once with customizable naming patterns and rules.',
    icon: 'mdi-rename-box',
    status: 'Available',
    url: 'https://rename.memejpg.com/',
    features: [
      'Batch renaming for multiple files',
      'Customizable naming patterns',
      'Prefix and suffix options',
      'Sequential numbering',
      'Preview before applying changes'
    ]
  },
  {
    name: 'Image Resizer & Cropper',
    description: 'Resize and crop multiple images to specific dimensions while maintaining quality and aspect ratios.',
    icon: 'mdi-resize',
    status: 'Available',
    url: 'https://resize.memejpg.com/',
    features: [
      'Batch resizing and cropping',
      'Custom dimension settings',
      'Aspect ratio preservation',
      'Multiple output formats',
      'Quality optimization'
    ]
  },
  {
    name: 'Image Compressor',
    description: 'Compress multiple images simultaneously to reduce file sizes without compromising visual quality.',
    icon: 'mdi-compress',
    status: 'Available',
    url: 'https://compress.memejpg.com/',
    features: [
      'Batch compression processing',
      'Lossless and lossy options',
      'Significant size reduction',
      'Quality preservation',
      'Multiple format support'
    ]
  },
  {
    name: 'ICO Converter',
    description: 'Convert images to ICO format for creating favicons and Windows icons with multiple size variants.',
    icon: 'mdi-file-image',
    status: 'Available',
    url: 'https://ico.memejpg.com/',
    features: [
      'Multiple ICO size generation',
      'Favicon creation support',
      'High-quality conversion',
      'Windows icon compatibility',
      'Batch processing capability'
    ]
  },
  {
    name: 'Image Beautifier',
    description: 'Enhance and beautify multiple images using advanced AI filters and enhancement algorithms.',
    icon: 'mdi-auto-fix',
    status: 'Available',
    url: 'https://beauty.memejpg.com/',
    features: [
      'AI-powered image enhancement',
      'Batch beautification processing',
      'Multiple filter options',
      'Color correction and optimization',
      'Automatic quality improvement',
      'Brightness and contrast adjustment'
    ]
  }
])

const values = ref([
  {
    title: 'Privacy First',
    description: 'All image processing happens locally in your browser. Your images never leave your device.',
    icon: 'mdi-shield-lock',
    color: 'success'
  },
  {
    title: 'Always Free',
    description: 'No subscriptions, no hidden fees, no limits. All our tools are completely free to use.',
    icon: 'mdi-heart',
    color: 'error'
  },
  {
    title: 'No Installation',
    description: 'Browser-based tools mean no downloads, no installations, and no system requirements.',
    icon: 'mdi-web',
    color: 'info'
  }
])
</script>

<style scoped>
.max-w-3xl {
  max-width: 48rem;
}

.gap-4 {
  gap: 1rem;
}
</style>