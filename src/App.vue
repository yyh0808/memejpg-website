<template>
  <v-app>
    <v-app-bar elevation="2" color="primary">
      <v-container fluid class="d-flex align-center pa-0">
        <div class="d-flex align-center">
          <v-img
            src="/logo.svg"
            alt="MemeJPG Logo"
            width="40"
            height="40"
            class="mr-3 flex-shrink-0"
          ></v-img>

          <div class="d-flex flex-column">
            <v-app-bar-title class="text-h5 font-weight-bold mb-0 pa-0">MemeJPG</v-app-bar-title>
            <div class="text-caption text-blue-lighten-3">{{ $t('nav.slogan') }}</div>
          </div>
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center">
          <v-btn
            v-for="link in navigation"
            :key="link.name"
            :to="link.external ? undefined : link.path"
            :href="link.external ? link.path : undefined"
            :target="link.external ? '_blank' : undefined"
            variant="text"
            color="white"
            class="mx-2"
          >
            {{ $t(link.name) }}
          </v-btn>

          <LanguageSwitcher />
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>

    <v-footer class="bg-grey-lighten-1 text-center d-flex flex-column">
      <div class="pt-4">
        <v-btn
          v-for="icon in socialIcons"
          :key="icon.name"
          :href="icon.url"
          target="_blank"
          variant="text"
          icon
          class="mx-2"
        >
          <v-icon>{{ icon.icon }}</v-icon>
        </v-btn>
      </div>

      <v-divider class="my-4"></v-divider>

      <div class="text-body-2 pb-4">
        © {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const navigation = [
  { name: 'nav.home', path: '/' },
  { name: 'nav.about', path: '/about' },
  { name: 'nav.blog', path: 'https://blog.memejpg.com', external: true },
]

const socialIcons = [
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com' },
  { name: 'Twitter', icon: 'mdi-twitter', url: 'https://twitter.com' },
]
</script>
