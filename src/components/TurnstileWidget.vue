<template>
  <div ref="container" class="turnstile-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
  siteKey?: string
  theme?: 'light' | 'dark' | 'auto'
  size?: 'normal' | 'compact'
}>()

const emit = defineEmits<{
  (e: 'verify', token: string): void
  (e: 'expire'): void
  (e: 'error'): void
}>()

const container = ref<HTMLElement | null>(null)
let widgetId: string | null = null

// Default site key for auth-login-register
const SITE_KEY =
  props.siteKey ||
  (import.meta.env.DEV ? '1x00000000000000000000AA' : '0x4AAAAAACDOWrzJFBVrB1dG')

const loadTurnstileScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.turnstile) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Turnstile script'))
    document.head.appendChild(script)
  })
}

const renderWidget = () => {
  if (!container.value || !window.turnstile) return

  // Remove existing widget if any
  if (widgetId) {
    window.turnstile.remove(widgetId)
  }

  widgetId = window.turnstile.render(container.value, {
    sitekey: SITE_KEY,
    theme: props.theme || 'auto',
    size: props.size || 'normal',
    callback: (token: string) => {
      emit('verify', token)
    },
    'expired-callback': () => {
      emit('expire')
    },
    'error-callback': () => {
      emit('error')
    },
  })
}

const reset = () => {
  if (widgetId && window.turnstile) {
    window.turnstile.reset(widgetId)
  }
}

onMounted(async () => {
  try {
    await loadTurnstileScript()
    renderWidget()
  } catch (error) {
    console.error('Failed to initialize Turnstile:', error)
    emit('error')
  }
})

onUnmounted(() => {
  if (widgetId && window.turnstile) {
    window.turnstile.remove(widgetId)
  }
})

// Re-render on theme change
watch(() => props.theme, () => {
  renderWidget()
})

defineExpose({ reset })
</script>

<style scoped>
.turnstile-container {
  display: flex;
  justify-content: center;
  margin: 16px 0;
}
</style>
