<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const proPriceLabel = 'US$29'

const buying = ref(false)
const buyError = ref<string | null>(null)

const featureRows = computed(() => [
  { name: 'Batch processing', free: true, pro: true },
  { name: 'Resize / compress / convert', free: true, pro: true },
  { name: 'Remove background', free: true, pro: true },
  { name: 'Watermark & effects', free: true, pro: true },
  { name: 'Image recognition (OCR / detection)', free: false, pro: true },
  { name: 'All AI image processing features', free: false, pro: true },
  { name: 'Commercial use', free: false, pro: true },
  { name: 'Priority support', free: false, pro: true },
])

function goLoginThenReturn() {
  router.push({ path: '/login', query: { redirect: '/pricing' } })
}

async function onBuyPro() {
  if (!userStore.isLoggedIn) {
    goLoginThenReturn()
    return
  }

  buyError.value = null
  buying.value = true
  try {
    const token = userStore.token
    if (!token) {
      goLoginThenReturn()
      return
    }

    const origin = window.location.origin
    const res = await fetch('/api/payment/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        successUrl: `${origin}/profile?payment=success`,
        cancelUrl: `${origin}/pricing?payment=cancel`,
      }),
    })

    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      buyError.value = data?.error || 'Checkout failed'
      return
    }

    if (!data?.url) {
      buyError.value = 'Checkout URL missing'
      return
    }

    window.location.href = data.url
  } catch {
    buyError.value = 'Network error'
  } finally {
    buying.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-background pt-16 pb-16">
    <v-container>
      <v-row justify="center" class="mb-10">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <h1 class="text-h3 font-weight-black mb-3 text-high-emphasis font-modern">Pricing</h1>
          <p class="text-body-1 text-medium-emphasis">
            Choose a plan that fits your workflow. Pro is a one-time purchase.
          </p>
        </v-col>
      </v-row>

      <v-row class="justify-center mb-10" style="gap: 16px;">
        <v-col cols="12" md="5" lg="4">
          <v-card class="glass-card pa-6 h-100" variant="flat">
            <div class="d-flex align-center justify-space-between mb-4">
              <h2 class="text-h5 font-weight-bold text-high-emphasis font-modern mb-0">Free</h2>
              <v-chip size="small" variant="outlined">Current</v-chip>
            </div>

            <div class="text-h4 font-weight-black mb-4 text-high-emphasis">$0</div>

            <div class="text-body-2 text-medium-emphasis mb-6">
              Perfect for basic online tools and quick edits.
            </div>

            <v-btn variant="outlined" block rounded="xl" disabled>
              Included
            </v-btn>
          </v-card>
        </v-col>

        <v-col cols="12" md="5" lg="4">
          <v-card class="glass-card pa-6 h-100" variant="flat">
            <div class="d-flex align-center justify-space-between mb-4">
              <h2 class="text-h5 font-weight-bold text-high-emphasis font-modern mb-0">Pro</h2>
              <v-chip color="primary" size="small" variant="flat" class="font-weight-bold">One-time</v-chip>
            </div>

            <div class="d-flex align-end mb-4" style="gap: 10px;">
              <div class="text-h4 font-weight-black text-high-emphasis">{{ proPriceLabel }}</div>
              <div class="text-body-2 text-medium-emphasis">lifetime license</div>
            </div>

            <div class="text-body-2 text-medium-emphasis mb-6">
              Unlock image recognition and the full AI image processing suite.
            </div>

            <v-btn
              color="primary"
              class="btn-gradient-primary"
              block
              rounded="xl"
              :loading="buying"
              :disabled="buying"
              @click="onBuyPro"
            >
              Upgrade to Pro
            </v-btn>

            <div v-if="!userStore.isLoggedIn" class="text-caption text-medium-emphasis mt-3">
              Login required to purchase.
            </div>

            <div v-else-if="buyError" class="text-caption text-error mt-3">
              {{ buyError }}
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="glass-card" variant="flat">
            <div class="pa-6 pb-2">
              <h3 class="text-h6 font-weight-bold text-high-emphasis font-modern mb-0">Feature comparison</h3>
            </div>

            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Feature</th>
                  <th class="text-center">Free</th>
                  <th class="text-center">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in featureRows" :key="row.name">
                  <td class="py-4">{{ row.name }}</td>
                  <td class="text-center">
                    <v-icon :color="row.free ? 'success' : 'grey'">
                      {{ row.free ? 'mdi-check' : 'mdi-close' }}
                    </v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon :color="row.pro ? 'success' : 'grey'">
                      {{ row.pro ? 'mdi-check' : 'mdi-close' }}
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
