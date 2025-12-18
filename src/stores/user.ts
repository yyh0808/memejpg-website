import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface User {
  id: string
  email: string
  is_verified: boolean
  avatar_url?: string
}

export const useUserStore = defineStore('user', () => {
  const token = ref<string | null>(localStorage.getItem('auth_token'))
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isLoggedIn = computed(() => !!token.value && !!user.value)

  function setAuth(newToken: string, newUser: User) {
    token.value = newToken
    user.value = newUser
    localStorage.setItem('auth_token', newToken)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  function clearAuth() {
    token.value = null
    user.value = null
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
  }

  function loadUserFromStorage() {
    const savedToken = localStorage.getItem('auth_token')
    const savedUser = localStorage.getItem('user')
    if (savedToken && savedUser) {
      try {
        token.value = savedToken
        user.value = JSON.parse(savedUser)
      } catch {
        clearAuth()
      }
    }
  }

  async function register(email: string, password: string, turnstileToken?: string): Promise<boolean> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/auth/web/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, turnstile_token: turnstileToken }),
      })
      const data = await res.json()
      if (!res.ok) {
        error.value = data.error || 'Registration failed'
        return false
      }
      return true
    } catch (e) {
      error.value = 'Network error'
      return false
    } finally {
      loading.value = false
    }
  }

  async function login(email: string, password: string, turnstileToken?: string): Promise<boolean> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/auth/web/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, turnstile_token: turnstileToken }),
      })
      const data = await res.json()
      if (!res.ok) {
        error.value = data.error || 'Login failed'
        return false
      }
      setAuth(data.token, data.user)
      return true
    } catch (e) {
      error.value = 'Network error'
      return false
    } finally {
      loading.value = false
    }
  }

  function logout() {
    clearAuth()
  }

  // Initialize from localStorage on store creation
  loadUserFromStorage()

  return {
    token,
    user,
    loading,
    error,
    isLoggedIn,
    register,
    login,
    logout,
    loadUserFromStorage,
  }
})
