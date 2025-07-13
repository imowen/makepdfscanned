<template>
  <n-dropdown
    trigger="click"
    :options="languageOptions"
    @select="handleLanguageChange"
    placement="bottom-start"
  >
    <n-button quaternary circle>
      🌐
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { NDropdown, NButton } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const languageOptions = [
  {
    label: 'English',
    key: 'en'
  },
  {
    label: '简体中文',
    key: 'zh-CN'
  },
  {
    label: '繁体中文',
    key: 'zh-TW'
  }
]

const handleLanguageChange = (key: string) => {
  locale.value = key
  localStorage.setItem('language', key)
}

// 从本地存储恢复语言设置
const savedLanguage = localStorage.getItem('language')
if (savedLanguage && ['en', 'zh-CN', 'zh-TW'].includes(savedLanguage)) {
  locale.value = savedLanguage
}
</script>