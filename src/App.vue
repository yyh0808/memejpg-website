<template>
  <v-app>
    <v-app-bar elevation="2" color="primary">
      <v-app-bar-title class="text-h5 font-weight-bold">
        MemeJPG
      </v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn
        v-for="link in navigation"
        :key="link.name"
        :to="link.path"
        variant="text"
        color="white"
        class="mx-2"
      >
        {{ link.name }}
      </v-btn>
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
        © {{ new Date().getFullYear() }} MemeJPG - Handle all your image editing needs.
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]

const socialIcons = [
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com' },
  { name: 'Twitter', icon: 'mdi-twitter', url: 'https://twitter.com' },
]
</script>