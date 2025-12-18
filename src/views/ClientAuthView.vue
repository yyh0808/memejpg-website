<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <div class="text-center">
      <v-progress-circular indeterminate color="primary" class="mb-4"></v-progress-circular>
      <div class="text-h6">Redirecting to App...</div>
      <div class="text-caption text-medium-emphasis">
        Please wait while we log you in to the MemeJPG App.
      </div>
      <v-btn class="mt-4" color="primary" variant="text" @click="handleRedirect">
        Click here if not redirected
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const handleRedirect = () => {
  const scheme = route.query.callback_scheme || 'memejpg'
  if (userStore.token && userStore.user) {
    const params = new URLSearchParams({
      token: userStore.token,
      email: userStore.user.email,
      // Default to level 0 (Free) if not present, assuming is_verified means something or check DB model
      level: '1' // TODO: Get actual level from user object when available in store
    })
    window.location.href = `${scheme}://auth?${params.toString()}`
  } else {
    router.replace(`/login?redirect=${encodeURIComponent(route.fullPath)}`)
  }
}

onMounted(() => {
  if (!userStore.isLoggedIn) {
     router.replace(`/login?redirect=${encodeURIComponent(route.fullPath)}`)
     return
  }
  
  setTimeout(handleRedirect, 1000)
})
</script>
