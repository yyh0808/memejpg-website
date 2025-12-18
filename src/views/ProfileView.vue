<template>
  <v-container class="py-16">
    <!-- Redirect if not logged in -->
    <template v-if="!userStore.isLoggedIn">
      <v-row>
        <v-col cols="12" class="text-center">
          <v-icon size="120" color="grey-lighten-1" class="mb-4">mdi-account-lock</v-icon>
          <h1 class="text-h4 font-weight-bold mb-4">{{ $t('auth.profile.notLoggedIn') }}</h1>
          <p class="text-body-1 text-medium-emphasis mb-6">{{ $t('auth.profile.pleaseLogin') }}</p>
          <v-btn to="/login" color="primary" size="large" variant="elevated">
            {{ $t('auth.login.title') }}
          </v-btn>
        </v-col>
      </v-row>
    </template>

    <!-- Profile Content -->
    <template v-else>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold text-primary mb-4">{{ $t('auth.profile.title') }}</h1>
          <p class="text-h6 text-medium-emphasis">{{ $t('auth.profile.subtitle') }}</p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <!-- User Info Card -->
          <v-card class="mb-6" elevation="2">
            <v-card-item>
              <div class="d-flex align-center">
                <v-avatar size="80" color="primary" class="mr-4">
                  <v-img v-if="userStore.user?.avatar_url" :src="userStore.user.avatar_url" />
                  <v-icon v-else size="40" color="white">mdi-account</v-icon>
                </v-avatar>
                <div>
                  <v-card-title class="pa-0 text-h5">{{ userStore.user?.email }}</v-card-title>
                  <v-chip
                    :color="userStore.user?.is_verified ? 'success' : 'warning'"
                    size="small"
                    variant="flat"
                    class="mt-1"
                  >
                    <v-icon start size="14">{{ userStore.user?.is_verified ? 'mdi-check-circle' : 'mdi-alert-circle' }}</v-icon>
                    {{ userStore.user?.is_verified ? $t('auth.profile.verified') : $t('auth.profile.unverified') }}
                  </v-chip>
                </div>
              </div>
            </v-card-item>
          </v-card>

          <v-card class="mb-6" elevation="2">
            <v-card-title class="d-flex align-center">
              <v-icon start>mdi-shield-star</v-icon>
              Account Plan
            </v-card-title>
            <v-divider />
            <v-card-text>
              <div class="d-flex align-center justify-space-between flex-wrap" style="gap: 12px;">
                <div class="d-flex align-center" style="gap: 10px;">
                  <v-chip v-if="planLoading" size="small" variant="outlined">Loading</v-chip>
                  <v-chip
                    v-else
                    :color="plan === 'pro' ? 'primary' : 'grey'"
                    size="small"
                    variant="flat"
                    class="font-weight-bold"
                  >
                    {{ plan === 'pro' ? 'Pro' : 'Free' }}
                  </v-chip>
                  <span v-if="planError" class="text-caption text-error">{{ planError }}</span>
                </div>

                <v-btn
                  v-if="plan !== 'pro'"
                  to="/pricing"
                  color="primary"
                  variant="flat"
                  rounded="xl"
                  class="btn-gradient-primary"
                >
                  Upgrade to Pro
                </v-btn>
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mb-6" elevation="2">
            <v-card-title class="d-flex align-center">
              <v-icon start>mdi-receipt-text</v-icon>
              Payment History
            </v-card-title>
            <v-divider />

            <v-card-text>
              <v-alert v-if="ordersError" type="error" variant="tonal" class="mb-4">
                {{ ordersError }}
              </v-alert>

              <v-table v-if="orders.length" density="comfortable">
                <thead>
                  <tr>
                    <th class="text-left">Status</th>
                    <th class="text-right">Amount</th>
                    <th class="text-left">Currency</th>
                    <th class="text-left">Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="o in orders" :key="o.id">
                    <td>
                      <v-chip
                        size="x-small"
                        :color="o.status === 'paid' ? 'success' : o.status === 'pending' ? 'warning' : 'error'"
                        variant="flat"
                        class="font-weight-bold"
                      >
                        {{ o.status }}
                      </v-chip>
                    </td>
                    <td class="text-right">
                      {{ formatAmount(o.amount) }}
                    </td>
                    <td class="text-left">
                      {{ (o.currency || 'usd').toUpperCase() }}
                    </td>
                    <td class="text-left">
                      {{ formatDate(o.created_at) }}
                    </td>
                  </tr>
                </tbody>
              </v-table>

              <div v-else class="text-body-2 text-medium-emphasis">
                <span v-if="ordersLoading">Loading orders...</span>
                <span v-else>No payments yet.</span>
              </div>
            </v-card-text>
          </v-card>

          <!-- Account Details Card -->
          <v-card class="mb-6" elevation="2">
            <v-card-title class="d-flex align-center">
              <v-icon start>mdi-account-details</v-icon>
              {{ $t('auth.profile.accountDetails') }}
            </v-card-title>
            <v-divider />
            <v-list>
              <v-list-item>
                <template #prepend>
                  <v-icon color="primary">mdi-email</v-icon>
                </template>
                <v-list-item-title>{{ $t('auth.email') }}</v-list-item-title>
                <v-list-item-subtitle>{{ userStore.user?.email }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon color="primary">mdi-identifier</v-icon>
                </template>
                <v-list-item-title>{{ $t('auth.profile.userId') }}</v-list-item-title>
                <v-list-item-subtitle class="text-truncate">{{ userStore.user?.id }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>

          <!-- Actions Card -->
          <v-card elevation="2">
            <v-card-title class="d-flex align-center">
              <v-icon start>mdi-cog</v-icon>
              {{ $t('auth.profile.actions') }}
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-btn
                color="error"
                variant="outlined"
                block
                @click="handleLogout"
                prepend-icon="mdi-logout"
              >
                {{ $t('auth.logout') }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

type Plan = 'free' | 'pro'

type Order = {
  id: string
  status: 'pending' | 'paid' | 'failed' | string
  amount: number
  currency: string
  created_at: number
  updated_at: number
}

const plan = ref<Plan>('free')
const planLoading = ref(false)
const planError = ref<string | null>(null)

const orders = ref<Order[]>([])
const ordersLoading = ref(false)
const ordersError = ref<string | null>(null)

const formatDate = (ts: number) => {
  if (!ts) return '-'
  return new Date(ts).toLocaleString()
}

const formatAmount = (amount: number) => {
  if (typeof amount !== 'number') return '-'
  return (amount / 100).toFixed(2)
}

async function loadPlan() {
  planError.value = null
  planLoading.value = true
  try {
    const token = userStore.token
    if (!token) return

    const res = await fetch('/api/payment/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      planError.value = data?.error || 'Failed to load plan'
      return
    }
    plan.value = data?.plan === 'pro' ? 'pro' : 'free'
  } catch {
    planError.value = 'Network error'
  } finally {
    planLoading.value = false
  }
}

async function loadOrders() {
  ordersError.value = null
  ordersLoading.value = true
  try {
    const token = userStore.token
    if (!token) return

    const res = await fetch('/api/payment/orders', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      ordersError.value = data?.error || 'Failed to load orders'
      return
    }
    orders.value = Array.isArray(data?.orders) ? data.orders : []
  } catch {
    ordersError.value = 'Network error'
  } finally {
    ordersLoading.value = false
  }
}

onMounted(async () => {
  if (!userStore.isLoggedIn) return
  await loadPlan()
  await loadOrders()
})

function handleLogout() {
  userStore.logout()
  router.push('/')
}
</script>
