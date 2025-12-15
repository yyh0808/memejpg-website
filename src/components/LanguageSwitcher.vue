<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" variant="text" color="medium-emphasis" class="mx-2" prepend-icon="mdi-translate">
        {{ currentLanguageLabel }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="language in languages"
        :key="language.code"
        @click="changeLanguage(language.code)"
        :class="{ 'v-list-item--active': locale === language.code }"
      >
        <v-list-item-title>
          <v-icon :icon="language.flag" class="me-2"></v-icon>
          {{ language.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'en', name: 'English', flag: 'mdi-flag' },
  { code: 'zh', name: '中文', flag: 'mdi-flag' },
  { code: 'ja', name: '日本語', flag: 'mdi-flag' },
  { code: 'es', name: 'Español', flag: 'mdi-flag' },
  { code: 'nl', name: 'Nederlands', flag: 'mdi-flag' },
  { code: 'ko', name: '한국어', flag: 'mdi-flag' },
  { code: 'fr', name: 'Français', flag: 'mdi-flag' },
  { code: 'de', name: 'Deutsch', flag: 'mdi-flag' },
]

const currentLanguageLabel = computed(() => {
  const current = languages.find((lang) => lang.code === locale.value)
  return current?.name || 'English'
})

const changeLanguage = (langCode: string) => {
  locale.value = langCode
  // 保存到localStorage
  localStorage.setItem('preferred-language', langCode)
  // 更新HTML lang属性
  document.documentElement.lang = langCode
}

// 初始化时从localStorage读取语言设置
const savedLanguage = localStorage.getItem('preferred-language')
if (savedLanguage && languages.some((lang) => lang.code === savedLanguage)) {
  locale.value = savedLanguage
  document.documentElement.lang = savedLanguage
}
</script>
