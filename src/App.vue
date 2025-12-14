<template>
  <v-app class="font-modern">
    <!-- Modern Glass Navbar -->
    <v-app-bar :elevation="0" class="glass-effect" height="70" fixed>
      <v-container class="d-flex align-center py-0">
        <!-- Logo with Home Link -->
        <router-link to="/" class="d-flex align-center text-decoration-none mr-8">
          <v-img
            src="/logo.svg"
            alt="MemeJPG Logo"
            width="42"
            height="42"
            class="mr-3 flex-shrink-0"
          ></v-img>

          <div class="d-flex flex-column">
            <h1 class="text-h6 font-weight-bold mb-0 text-grey-darken-3 font-modern">MemeJPG</h1>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex align-center">
          <v-btn
            v-for="link in navigation"
            :key="link.name"
            :to="link.external ? undefined : link.path"
            :href="link.external ? link.path : undefined"
            :target="link.external ? '_blank' : undefined"
            variant="text"
            rounded="xl"
            class="mx-1 text-grey-darken-2 font-weight-medium text-capitalize"
            :class="{ 'text-primary font-weight-bold': $route.path === link.path }"
          >
            {{ $t(link.name) }}
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <!-- Right Side Actions -->
        <div class="d-flex align-center">
          <LanguageSwitcher />
          
          <v-btn
            to="/tools"
            color="primary"
            variant="text"
             class="hidden-sm-and-down ml-2 font-weight-bold"
            rounded="xl"
          >
            Online Tools
          </v-btn>

          <v-btn
            to="/download"
            color="primary"
            variant="flat"
             class="hidden-sm-and-down ml-2 btn-gradient-primary"
            rounded="xl"
            prepend-icon="mdi-apple"
          >
            Mac App
          </v-btn>
          
          <!-- Mobile Menu Button (TODO: Implement full drawer if needed, for now just simple) -->
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>

    <!-- Modern Footer -->
    <v-footer class="bg-white border-t pt-16 pb-8">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="mb-8 mb-md-0">
            <div class="d-flex align-center mb-4">
              <v-img src="/logo.svg" width="32" height="32" class="flex-grow-0 mr-2"></v-img>
              <span class="text-h6 font-weight-bold text-grey-darken-3">MemeJPG</span>
            </div>
            <p class="text-body-2 text-grey-darken-1 mb-6" style="max-width: 300px;">
              {{ $t('nav.slogan') || 'Master your images with our professional suite of online tools.' }}
            </p>
            <div class="d-flex">
              <v-btn
                v-for="icon in socialIcons"
                :key="icon.name"
                :href="icon.url"
                target="_blank"
                variant="text"
                density="comfortable"
                color="grey-darken-1"
                icon
                class="mr-2"
              >
                <v-icon>{{ icon.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col cols="6" md="2">
            <h4 class="text-subtitle-2 font-weight-bold mb-4 text-grey-darken-3">Product</h4>
            <div class="d-flex flex-column gap-2">
              <router-link to="/" class="text-body-2 text-grey-darken-1 text-decoration-none hover:text-primary mb-2">Tools</router-link>
              <router-link to="/download" class="text-body-2 text-grey-darken-1 text-decoration-none hover:text-primary mb-2">Mac App</router-link>
              <a href="#" class="text-body-2 text-grey-darken-1 text-decoration-none hover:text-primary mb-2">Pricing</a>
            </div>
          </v-col>

          <v-col cols="6" md="2">
             <h4 class="text-subtitle-2 font-weight-bold mb-4 text-grey-darken-3">Resources</h4>
            <div class="d-flex flex-column gap-2">
              <a href="https://blog.memejpg.com" class="text-body-2 text-grey-darken-1 text-decoration-none hover:text-primary mb-2">Blog</a>
              <router-link to="/about" class="text-body-2 text-grey-darken-1 text-decoration-none hover:text-primary mb-2">About Us</router-link>
              <router-link to="/privacy" class="text-body-2 text-grey-darken-1 text-decoration-none hover:text-primary mb-2">Privacy Policy</router-link>
              <router-link to="/terms" class="text-body-2 text-grey-darken-1 text-decoration-none hover:text-primary mb-2">Terms of Service</router-link>
            </div>
          </v-col>
           <v-col cols="12" md="4">
            <!-- Newsletter or extra info can go here -->
          </v-col>
        </v-row>

        <v-divider class="my-8"></v-divider>

        <div class="text-center text-caption text-grey-darken-1">
          © {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { useSEO } from './composables/useSEO'

// Initialize SEO management
useSEO()

const navigation = [
  { name: 'nav.home', path: '/' },
  { name: 'OnlineTools', path: '/tools' },
  { name: 'nav.about', path: '/about' },
  { name: 'MacOS App', path: '/download' }, 
  { name: 'nav.blog', path: 'https://blog.memejpg.com', external: true },
]

const socialIcons = [
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com' },
  { name: 'Twitter', icon: 'mdi-twitter', url: 'https://twitter.com' },
]
</script>
