<template>
  <v-container class="py-16">
    <!-- Header Section -->
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h1 class="text-h2 font-weight-bold text-primary mb-4">
          {{ $t('about.title') }}
        </h1>
        <p class="text-h6 text-grey-darken-1 max-w-3xl mx-auto">
          {{ $t('about.subtitle') }}
        </p>
      </v-col>
    </v-row>

    <!-- Mission Section -->
    <v-row class="mb-16">
      <v-col cols="12" md="6" class="d-flex align-center">
        <div>
          <h2 class="text-h3 font-weight-bold mb-4">{{ $t('about.mission.title') }}</h2>
          <p class="text-body-1 text-grey-darken-1 mb-4">
            {{ $t('about.mission.description1') }}
          </p>
          <p class="text-body-1 text-grey-darken-1">
            {{ $t('about.mission.description2') }}
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-card class="pa-8" elevation="4" max-width="400">
          <v-icon size="120" color="primary" class="d-block mx-auto mb-4"> mdi-image-edit </v-icon>
          <h3 class="text-h5 text-center font-weight-bold">{{ $t('about.mission.tagline') }}</h3>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tools Overview Section -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">{{ $t('about.tools.title') }}</h2>
      </v-col>

      <v-col v-for="tool in toolsDetail" :key="tool.nameKey" cols="12" md="6" class="mb-8">
        <v-card elevation="2" class="h-100">
          <v-card-item>
            <div class="d-flex align-center mb-4">
              <v-avatar size="60" color="primary" class="mr-4">
                <v-icon size="30" color="white">{{ tool.icon }}</v-icon>
              </v-avatar>
              <div>
                <v-card-title class="pa-0">{{ $t(tool.nameKey) }}</v-card-title>
                <v-chip
                  :color="tool.status === 'Available' ? 'success' : 'warning'"
                  size="small"
                  variant="flat"
                >
                  {{
                    tool.status === 'Available'
                      ? $t('about.tools.available')
                      : $t('about.tools.comingSoon')
                  }}
                </v-chip>
              </div>
            </div>

            <v-card-text class="px-0 pb-0">
              <p class="text-body-1 mb-4">{{ $t(tool.descriptionKey) }}</p>

              <h4 class="text-subtitle-1 font-weight-bold mb-3">
                {{ $t('about.tools.features') }}
              </h4>
              <div class="features-list w-100">
                <div
                  v-for="(feature, index) in $t(tool.featuresKey)"
                  :key="index"
                  class="feature-item d-flex align-start mb-2 w-100"
                >
                  <v-icon size="16" color="primary" class="mt-1 mr-2 flex-shrink-0"
                    >mdi-check-circle</v-icon
                  >
                  <span
                    class="text-body-2 flex-grow-1 feature-text"
                    style="
                      word-wrap: normal !important;
                      overflow-wrap: normal !important;
                      white-space: normal !important;
                      word-break: normal !important;
                    "
                    >{{ feature }}</span
                  >
                </div>
              </div>
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
              {{ $t('about.tools.tryNow') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Values Section -->
    <v-row class="py-16 bg-grey-lighten-4 rounded-lg">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-12">{{ $t('about.values.title') }}</h2>
      </v-col>

      <v-col v-for="value in values" :key="value.titleKey" cols="12" md="4" class="text-center">
        <v-avatar size="80" :color="value.color" class="mb-4">
          <v-icon size="40" color="white">{{ value.icon }}</v-icon>
        </v-avatar>

        <h3 class="text-h5 font-weight-bold mb-3">{{ $t(value.titleKey) }}</h3>
        <p class="text-body-1 text-grey-darken-1">{{ $t(value.descriptionKey) }}</p>
      </v-col>
    </v-row>

    <!-- Contact Section -->
    <v-row class="mt-16">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 font-weight-bold mb-4">{{ $t('about.contact.title') }}</h2>
        <p class="text-body-1 text-grey-darken-1 mb-6">
          {{ $t('about.contact.description') }}
        </p>

        <div class="d-flex justify-center flex-wrap gap-4">
          <v-btn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-github"
            href="https://github.com"
            target="_blank"
          >
            {{ $t('about.contact.github') }}
          </v-btn>

          <v-btn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-email"
            href="mailto:contact@memejpg.com"
          >
            {{ $t('about.contact.email') }}
          </v-btn>

          <v-btn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-twitter"
            href="https://twitter.com"
            target="_blank"
          >
            {{ $t('about.contact.twitter') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO'

const toolsDetail = ref([
  {
    nameKey: 'about.toolsDetail.backgroundRemover.name',
    descriptionKey: 'about.toolsDetail.backgroundRemover.description',
    featuresKey: 'about.toolsDetail.backgroundRemover.features',
    icon: 'mdi-image-filter-hdr',
    status: 'Available',
    url: 'https://removebg.memejpg.com/',
  },
  {
    nameKey: 'about.toolsDetail.fontCompressor.name',
    descriptionKey: 'about.toolsDetail.fontCompressor.description',
    featuresKey: 'about.toolsDetail.fontCompressor.features',
    icon: 'mdi-format-font',
    status: 'Available',
    url: 'https://fontcompressor.memejpg.com/',
  },
  {
    nameKey: 'about.toolsDetail.imageRenamer.name',
    descriptionKey: 'about.toolsDetail.imageRenamer.description',
    featuresKey: 'about.toolsDetail.imageRenamer.features',
    icon: 'mdi-rename-box',
    status: 'Available',
    url: 'https://rename.memejpg.com/',
  },
  {
    nameKey: 'about.toolsDetail.imageResizer.name',
    descriptionKey: 'about.toolsDetail.imageResizer.description',
    featuresKey: 'about.toolsDetail.imageResizer.features',
    icon: 'mdi-resize',
    status: 'Available',
    url: 'https://resize.memejpg.com/',
  },
  {
    nameKey: 'about.toolsDetail.imageCompressor.name',
    descriptionKey: 'about.toolsDetail.imageCompressor.description',
    featuresKey: 'about.toolsDetail.imageCompressor.features',
    icon: 'mdi-compress',
    status: 'Available',
    url: 'https://compress.memejpg.com/',
  },
  {
    nameKey: 'about.toolsDetail.icoConverter.name',
    descriptionKey: 'about.toolsDetail.icoConverter.description',
    featuresKey: 'about.toolsDetail.icoConverter.features',
    icon: 'mdi-file-image',
    status: 'Available',
    url: 'https://ico.memejpg.com/',
  },
  {
    nameKey: 'about.toolsDetail.imageBeautifier.name',
    descriptionKey: 'about.toolsDetail.imageBeautifier.description',
    featuresKey: 'about.toolsDetail.imageBeautifier.features',
    icon: 'mdi-auto-fix',
    status: 'Available',
    url: 'https://beauty.memejpg.com/',
  },
  {
    nameKey: 'about.toolsDetail.privateDomainTrafficGenerator.name',
    descriptionKey: 'about.toolsDetail.privateDomainTrafficGenerator.description',
    featuresKey: 'about.toolsDetail.privateDomainTrafficGenerator.features',
    icon: 'mdi-chart-line',
    status: 'Available',
    url: 'https://siyu.memejpg.com/',
  },
])

const values = ref([
  {
    titleKey: 'about.values.privacy.title',
    descriptionKey: 'about.values.privacy.description',
    icon: 'mdi-shield-lock',
    color: 'success',
  },
  {
    titleKey: 'about.values.free.title',
    descriptionKey: 'about.values.free.description',
    icon: 'mdi-heart',
    color: 'error',
  },
  {
    titleKey: 'about.values.noInstall.title',
    descriptionKey: 'about.values.noInstall.description',
    icon: 'mdi-web',
    color: 'info',
  },
])

const { updateSEO } = useSEO()

onMounted(() => {
  updateSEO({
    title: 'About MemeJPG - Free Image Editing Tools | Privacy-First Browser Tools',
    description:
      "Learn about MemeJPG's mission to provide free, privacy-first image editing tools. Discover our browser-based solutions for background removal, image compression, and more.",
    keywords:
      'about memejpg, image editing tools, privacy-first tools, browser-based editing, free image tools, background remover, image compressor',
  })
})
</script>

<style scoped>
.max-w-3xl {
  max-width: 48rem;
}

.features-list {
  max-width: 100%;
  width: 100%;
}

.feature-item {
  line-height: 1.6;
  width: 100%;
}

.feature-item span {
  flex: 1;
  min-width: 0;
  word-wrap: normal !important;
  overflow-wrap: normal !important;
  hyphens: none !important;
  white-space: normal !important;
  word-break: normal !important;
  line-break: auto !important;
}

.feature-text {
  word-wrap: normal !important;
  overflow-wrap: normal !important;
  hyphens: none !important;
  white-space: normal !important;
  word-break: normal !important;
  line-break: auto !important;
  text-wrap: wrap !important;
}

.gap-4 {
  gap: 1rem;
}
</style>
