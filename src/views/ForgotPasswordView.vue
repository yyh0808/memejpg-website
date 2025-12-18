<template>
  <v-container class="py-16 d-flex align-center justify-center" style="min-height: calc(100vh - 200px);">
    <v-card class="pa-8" max-width="450" width="100%" elevation="4">
      <div class="text-center mb-6">
        <v-avatar size="64" color="primary" class="mb-4">
          <v-icon size="36" color="white">mdi-lock-reset</v-icon>
        </v-avatar>
        <h1 class="text-h4 font-weight-bold mb-2">{{ $t('auth.forgotPassword.title') }}</h1>
        <p class="text-body-2 text-medium-emphasis">{{ $t('auth.forgotPassword.subtitle') }}</p>
      </div>

      <v-alert v-if="error" type="error" variant="tonal" class="mb-4" closable @click:close="error = null">
        {{ error }}
      </v-alert>

      <v-alert v-if="turnstileError" type="error" variant="tonal" class="mb-4">
        {{ $t('auth.validation.turnstileRequired') }}
      </v-alert>

      <v-alert v-if="success" type="success" variant="tonal" class="mb-4">
        {{ $t('auth.forgotPassword.success') }}
      </v-alert>

      <v-form @submit.prevent="handleSubmit" ref="form" v-if="!success">
        <v-text-field
          v-model="email"
          :label="$t('auth.email')"
          type="email"
          prepend-inner-icon="mdi-email"
          variant="outlined"
          :rules="emailRules"
          required
          class="mb-2"
        ></v-text-field>

        <!-- Turnstile Widget -->
        <TurnstileWidget
          ref="turnstileRef"
          @verify="onTurnstileVerify"
          @expire="onTurnstileExpire"
          @error="onTurnstileError"
        />

        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          :loading="loading"
          :disabled="loading || !turnstileToken"
          class="mb-4"
        >
          {{ $t('auth.forgotPassword.submit') }}
        </v-btn>
      </v-form>

      <div class="text-center">
        <router-link to="/login" class="text-primary font-weight-medium">
          {{ $t('auth.forgotPassword.backToLogin') }}
        </router-link>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TurnstileWidget from '@/components/TurnstileWidget.vue'

const { t } = useI18n()

const email = ref('')
const loading = ref(false)
const error = ref<string | null>(null)
const success = ref(false)
const form = ref()
const turnstileRef = ref()
const turnstileToken = ref('')
const turnstileError = ref(false)

const emailRules = [
  (v: string) => !!v || t('auth.validation.emailRequired'),
  (v: string) => /.+@.+\..+/.test(v) || t('auth.validation.emailInvalid'),
]

function onTurnstileVerify(token: string) {
  turnstileToken.value = token
  turnstileError.value = false
}

function onTurnstileExpire() {
  turnstileToken.value = ''
}

function onTurnstileError() {
  turnstileError.value = true
  turnstileToken.value = ''
}

async function handleSubmit() {
  const { valid } = await form.value.validate()
  if (!valid) return

  if (!turnstileToken.value) {
    turnstileError.value = true
    return
  }

  loading.value = true
  error.value = null

  try {
    const res = await fetch('/api/auth/web/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        turnstile_token: turnstileToken.value,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      error.value = data.error || t('auth.forgotPassword.error')
      turnstileRef.value?.reset()
      turnstileToken.value = ''
      return
    }

    success.value = true
  } catch (e) {
    error.value = t('auth.forgotPassword.error')
    turnstileRef.value?.reset()
    turnstileToken.value = ''
  } finally {
    loading.value = false
  }
}
</script>
