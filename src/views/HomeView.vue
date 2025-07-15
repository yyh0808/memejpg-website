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

        <h1 class="text-h3 font-weight-bold text-primary mb-3">{{ $t('hero.title') }}</h1>

        <p class="text-h6 text-grey-darken-1 mb-6">{{ $t('hero.subtitle') }}</p>

        <v-btn
          color="primary"
          size="large"
          variant="elevated"
          prepend-icon="mdi-rocket-launch"
          @click="scrollToTools"
        >
          {{ $t('hero.exploreTools') }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tools Section -->
    <v-row id="tools-section" class="py-16">
      <v-col cols="12">
        <h2 class="text-h3 text-center font-weight-bold mb-12">{{ $t('tools.title') }}</h2>
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
              {{ $t(tool.nameKey) }}
            </v-card-title>

            <v-card-subtitle class="text-center">
              {{ $t(tool.descriptionKey) }}
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
              {{ tool.available ? $t('tools.tryNow') : $t('tools.comingSoon') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Features Section -->
    <v-row class="py-16 bg-grey-lighten-4">
      <v-col cols="12">
        <h2 class="text-h3 text-center font-weight-bold mb-12">{{ $t('features.title') }}</h2>
      </v-col>

      <v-col v-for="feature in features" :key="feature.titleKey" cols="12" md="4">
        <div class="text-center">
          <v-avatar size="100" color="secondary" class="mb-4">
            <v-icon size="50" color="white">{{ feature.icon }}</v-icon>
          </v-avatar>

          <h3 class="text-h5 font-weight-bold mb-3">
            {{ $t(feature.titleKey) }}
          </h3>

          <p class="text-body-1 text-grey-darken-1">
            {{ $t(feature.descriptionKey) }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const heroImage = '/logo-large.svg'

const tools = ref([
  {
    id: 1,
    nameKey: 'tools.backgroundRemover.name',
    descriptionKey: 'tools.backgroundRemover.description',
    icon: 'mdi-image-filter-hdr',
    url: 'https://removebg.memejpg.com/',
    available: true,
  },
  {
    id: 2,
    nameKey: 'tools.fontCompressor.name',
    descriptionKey: 'tools.fontCompressor.description',
    icon: 'mdi-format-font',
    url: 'https://fontcompressor.memejpg.com/',
    available: true,
  },
  {
    id: 3,
    nameKey: 'tools.imageRenamer.name',
    descriptionKey: 'tools.imageRenamer.description',
    icon: 'mdi-rename-box',
    url: 'https://rename.memejpg.com/',
    available: true,
  },
  {
    id: 4,
    nameKey: 'tools.imageResizer.name',
    descriptionKey: 'tools.imageResizer.description',
    icon: 'mdi-resize',
    url: 'https://resize.memejpg.com/',
    available: true,
  },
  {
    id: 5,
    nameKey: 'tools.imageCompressor.name',
    descriptionKey: 'tools.imageCompressor.description',
    icon: 'mdi-zip-box',
    url: 'https://compress.memejpg.com/',
    available: true,
  },
  {
    id: 6,
    nameKey: 'tools.icoConverter.name',
    descriptionKey: 'tools.icoConverter.description',
    icon: 'mdi-file-image',
    url: 'https://ico.memejpg.com/',
    available: true,
  },
  {
    id: 7,
    nameKey: 'tools.imageBeautifier.name',
    descriptionKey: 'tools.imageBeautifier.description',
    icon: 'mdi-auto-fix',
    url: 'https://beauty.memejpg.com/',
    available: true,
  },
  {
    id: 8,
    nameKey: 'tools.privateDomainTrafficGenerator.name',
    descriptionKey: 'tools.privateDomainTrafficGenerator.description',
    icon: 'mdi-chart-line',
    url: 'https://siyu.memejpg.com/',
    available: true,
  },
  {
    id: 9,
    nameKey: 'tools.businessCardGenerator.name',
    descriptionKey: 'tools.businessCardGenerator.description',
    icon: 'mdi-card-account-details',
    url: 'https://card.memejpg.com',
    available: true,
  },
  {
    id: 10,
    nameKey: 'tools.sorryCard.name',
    descriptionKey: 'tools.sorryCard.description',
    icon: 'mdi-emoticon-sad',
    url: 'https://sorry.memejpg.com',
    available: true,
  },
  {
    id: 11,
    nameKey: 'tools.greetingCard.name',
    descriptionKey: 'tools.greetingCard.description',
    icon: 'mdi-cards-heart',
    url: 'https://greeting.memejpg.com',
    available: true,
  },
  {
    id: 12,
    nameKey: 'tools.birthdayCard.name',
    descriptionKey: 'tools.birthdayCard.description',
    icon: 'mdi-cake-variant',
    url: 'https://birthday.memejpg.com',
    available: true,
  },
  {
    id: 13,
    nameKey: 'tools.qrCodeGenerator.name',
    descriptionKey: 'tools.qrCodeGenerator.description',
    icon: 'mdi-qrcode',
    url: 'https://qr.memejpg.com',
    available: true,
  },
  {
    id: 14,
    nameKey: 'tools.bookmarkGenerator.name',
    descriptionKey: 'tools.bookmarkGenerator.description',
    icon: 'mdi-bookmark',
    url: 'https://bookmark.memejpg.com',
    available: true,
  },
  {
    id: 15,
    nameKey: 'tools.invitationGenerator.name',
    descriptionKey: 'tools.invitationGenerator.description',
    icon: 'mdi-email-outline',
    url: 'https://invitation.memejpg.com',
    available: true,
  },
  {
    id: 16,
    nameKey: 'tools.giftCardGenerator.name',
    descriptionKey: 'tools.giftCardGenerator.description',
    icon: 'mdi-gift',
    url: 'https://gift.memejpg.com',
    available: true,
  },
  {
    id: 17,
    nameKey: 'tools.serviceCardGenerator.name',
    descriptionKey: 'tools.serviceCardGenerator.description',
    icon: 'mdi-cog',
    url: 'https://sales.memejpg.com',
    available: true,
  },
  {
    id: 18,
    nameKey: 'tools.membershipCardGenerator.name',
    descriptionKey: 'tools.membershipCardGenerator.description',
    icon: 'mdi-card-account-details-outline',
    url: 'https://membership.memejpg.com',
    available: true,
  },
])

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
