<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-message-provider>
      <div class="app-layout">
        <AppHeader />
        <main class="view"><RouterView :key="route.fullPath" /></main>
      </div>
      <ServieWorkerReloadPrompt />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useOsTheme, darkTheme, NConfigProvider, NGlobalStyle, NMessageProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ServieWorkerReloadPrompt from '@/components/Misc/ServiceWorkerReloadPrompt.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

const route = useRoute()

const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
}

.view {
  padding-top: 70px; /* 为固定标题栏留出空间 */
}
</style>
