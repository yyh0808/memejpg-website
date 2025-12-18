<template>
  <v-container class="py-16 d-flex align-center justify-center" style="min-height: calc(100vh - 200px);">
    <v-card class="pa-8" max-width="450" width="100%" elevation="4">
      <div class="text-center mb-6">
        <v-avatar size="64" color="primary" class="mb-4">
          <v-icon size="36" color="white">mdi-account-circle</v-icon>
        </v-avatar>
        <h1 class="text-h4 font-weight-bold mb-2">{{ $t('auth.login.title') }}</h1>
        <p class="text-body-2 text-medium-emphasis">{{ $t('auth.login.subtitle') }}</p>
      </div>

      <v-alert v-if="userStore.error" type="error" variant="tonal" class="mb-4" closable @click:close="userStore.error = null">
        {{ userStore.error }}
      </v-alert>

      <v-alert v-if="turnstileError" type="error" variant="tonal" class="mb-4">
        {{ $t('auth.validation.turnstileRequired') }}
      </v-alert>

      <v-form @submit.prevent="handleLogin" ref="form">
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

        <v-text-field
          v-model="password"
          :label="$t('auth.password')"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          variant="outlined"
          :rules="passwordRules"
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
          :loading="userStore.loading"
          :disabled="userStore.loading || !turnstileToken"
          class="mb-4"
        >
          {{ $t('auth.login.submit') }}
        </v-btn>
      </v-form>

      <div class="text-center mb-2">
        <router-link to="/forgot-password" class="text-primary text-body-2">
          {{ $t('auth.login.forgotPassword') }}
        </router-link>
      </div>

      <div class="text-center">
        <span class="text-medium-emphasis">{{ $t('auth.login.noAccount') }}</span>
        <router-link to="/register" class="text-primary ml-1 font-weight-medium">
          {{ $t('auth.login.signUp') }}
        </router-link>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useI18n } from 'vue-i18n'
import TurnstileWidget from '@/components/TurnstileWidget.vue'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const { t } = useI18n()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const form = ref()
const turnstileRef = ref()
const turnstileToken = ref('')
const turnstileError = ref(false)

const emailRules = [
  (v: string) => !!v || t('auth.validation.emailRequired'),
  (v: string) => /.+@.+\..+/.test(v) || t('auth.validation.emailInvalid'),
]

const passwordRules = [
  (v: string) => !!v || t('auth.validation.passwordRequired'),
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

async function handleLogin() {
  const { valid } = await form.value.validate()
  if (!valid) return

  if (!turnstileToken.value) {
    turnstileError.value = true
    return
  }

  const success = await userStore.login(email.value, password.value, turnstileToken.value)
  if (success) {
    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : ''
    router.push(redirect || '/profile')
  } else {
    // Reset turnstile on failed login
    turnstileRef.value?.reset()
    turnstileToken.value = ''
  }
}
</script>
