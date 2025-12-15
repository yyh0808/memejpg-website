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
            <h1 class="text-h6 font-weight-bold mb-0 text-high-emphasis font-modern">MemeJPG</h1>
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

          <!-- Theme Toggle -->
          <v-btn
            icon
            variant="text"
            color="medium-emphasis"
            class="ml-2"
            @click="toggleTheme"
          >
             <v-icon>{{ themeIcon }}</v-icon>
             <v-tooltip activator="parent" location="bottom" content-class="bg-surface-variant text-high-emphasis">{{ $t(themeLabel) }}</v-tooltip>
          </v-btn>
          
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
    <v-footer class="bg-surface border-t pt-16 pb-8">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" class="mb-8 mb-md-0">
            <div class="d-flex align-center mb-4">
              <v-img src="/logo.svg" width="32" height="32" class="flex-grow-0 mr-2"></v-img>
              <span class="text-h6 font-weight-bold text-high-emphasis">MemeJPG</span>
            </div>
            <p class="text-body-2 text-medium-emphasis mb-6" style="max-width: 300px;">
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
            <h4 class="text-subtitle-2 font-weight-bold mb-4 text-high-emphasis">Product</h4>
            <div class="d-flex flex-column gap-2">
              <router-link to="/" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">Tools</router-link>
              <router-link to="/download" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">Mac App</router-link>
              <a href="#" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">Pricing</a>
            </div>
          </v-col>

          <v-col cols="6" md="2">
             <h4 class="text-subtitle-2 font-weight-bold mb-4 text-high-emphasis">Resources</h4>
            <div class="d-flex flex-column gap-2">
              <a href="https://blog.memejpg.com" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">Blog</a>
              <router-link to="/about" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">About Us</router-link>
              <router-link to="/privacy" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">Privacy Policy</router-link>
              <router-link to="/terms" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">Terms of Service</router-link>
            </div>
          </v-col>

          <v-col cols="6" md="2">
            <h4 class="text-subtitle-2 font-weight-bold mb-4 text-high-emphasis">{{ $t('footer.friendlyLinks') }}</h4>
            <div class="d-flex flex-column gap-2">
              <a href="https://graphock.com" target="_blank" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">Graphock</a>
              <a href="https://moeicons.com" target="_blank" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">MoeIcons</a>
              <a href="https://monkeyknows.wiki" target="_blank" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">MonkeyKnows</a>
              <a href="https://poy8.com" target="_blank" class="text-body-2 text-medium-emphasis text-decoration-none hover:text-primary mb-2">Poy8</a>
            </div>
          </v-col>
          
          <v-col cols="12" md="3">
            <h4 class="text-subtitle-2 font-weight-bold mb-4 text-high-emphasis">Online Tools</h4>
            <div class="d-flex flex-wrap" style="gap: 12px; row-gap: 8px;">
              <a 
                v-for="tool in tools" 
                :key="tool.id" 
                :href="tool.url" 
                target="_blank"
                class="text-caption text-medium-emphasis text-decoration-none hover:text-primary"
                style="min-width: 140px;"
              >
                {{ $t(tool.nameKey) }}
              </a>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-8"></v-divider>

        <div class="d-flex flex-column flex-md-row justify-space-between align-center text-caption text-medium-emphasis">
          <div class="mb-4 mb-md-0">
             © {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
          </div>
          <div class="d-flex align-center">
             <LanguageSwitcher />
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useTheme } from 'vuetify'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { useSEO } from './composables/useSEO'
import { tools } from './data/tools'

// Initialize SEO management
useSEO()

const theme = useTheme()
// Theme mode: 'system' | 'light' | 'dark'
const themeMode = ref<'system' | 'light' | 'dark'>('system')

const themeIcon = computed(() => {
  // If system, show what it IS currently (or auto icon? User said "no auto button", but we need a button to toggle)
  // User said: "no auto button", just toggle light/dark.
  // If currently system, we show the icon for what the Next state would be? Or current?
  // Let's show current state icon.
  const current = theme.global.name.value
  return current === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'
})

const themeLabel = computed(() => {
  if (themeMode.value === 'system') return 'Auto' // We removed Auto button but logic remains if ever needed.
  // Actually, the button toggles between Light/Dark. The label should say what it SWITCHES TO, or what it IS?
  // User said earlier "Light theme text... Dark theme text...".
  // Standard is to describe function "Switch to Dark Mode" or current state "Light Mode".
  // Current logic returns 'Dark Mode' if dark.
  // Let's use i18n.
  return themeMode.value === 'dark' ? 'nav.theme.dark' : 'nav.theme.light'
})

const toggleTheme = () => {
    // If system, switch to the OPPOSITE of what system is currently showing to "force" a manual mode
    if (themeMode.value === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        themeMode.value = isDark ? 'light' : 'dark'
    } else {
        // Simple toggle
        themeMode.value = themeMode.value === 'dark' ? 'light' : 'dark'
    }
    
    applyTheme()
}

const applyTheme = () => {
    if (themeMode.value === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        theme.global.name.value = isDark ? 'dark' : 'light'
    } else {
        theme.global.name.value = themeMode.value
    }
    localStorage.setItem('theme-mode', themeMode.value)
}

onMounted(() => {
    const saved = localStorage.getItem('theme-mode') as 'system' | 'light' | 'dark' | null
    if (saved) themeMode.value = saved
    
    // Listen for system changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (themeMode.value === 'system') applyTheme()
    })
    
    applyTheme()
})

const navigation = [
  { name: 'nav.home', path: '/' },
  { name: 'OnlineTools', path: '/tools' },
  { name: 'nav.about', path: '/about' },
  { name: 'MacOS App', path: '/download' }, 
  { name: 'nav.blog', path: 'https://blog.memejpg.com', external: true },
]

const socialIcons = [
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/yyh0808/memejpg-website' },
  { name: 'Twitter', icon: 'mdi-twitter', url: 'https://x.com/moewolf_design' },
]
</script>
