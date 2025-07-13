<template>
  <div class="app-header">
    <div class="header-content">
      <div class="header-left">
        <h1 class="site-title">{{ t('base.title') }}</h1>
        <nav class="nav-menu">
          <!-- 未来可以在这里添加导航菜单 -->
        </nav>
      </div>
      
      <div class="header-right">
        <LanguageSwitcher />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/buttons/LanguageSwitcher.vue'

const { t } = useI18n()
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 30px;
}

.site-title {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.nav-menu {
  display: flex;
  gap: 20px;
  /* 未来导航菜单样式 */
}

.header-right {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .header-content {
    padding: 10px 15px;
  }
  
  .site-title {
    font-size: 20px;
  }
  
  .header-left {
    gap: 15px;
  }
}
</style>