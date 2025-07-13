<template>
  <MainContainer>
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <TheIndexViewHead />
      </section>

      <!-- First Ad Slot -->
      <section class="ad-slot">
        <div class="ad-placeholder">
          <!-- Google AdSense 横幅广告位 -->
          <div style="text-align: center; padding: 20px; background: #f5f5f5; border: 1px dashed #ccc;">
            Google 广告位 1 (728x90 或 320x50)
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <n-h2 style="text-align: center; margin-bottom: 40px;">{{ t('features.title') }}</n-h2>
        <TheFeatures />
      </section>

      <!-- Second Ad Slot -->
      <section class="ad-slot">
        <div class="ad-placeholder">
          <!-- Google AdSense 矩形广告位 -->
          <div style="text-align: center; padding: 20px; background: #f5f5f5; border: 1px dashed #ccc;">
            Google 广告位 2 (300x250)
          </div>
        </div>
      </section>

      <!-- SEO Content Section -->
      <section class="seo-content">
        <n-card>
          <n-h3>{{ t('base.seo.aboutTitle') }}</n-h3>
          <n-p>{{ t('base.seo.aboutDescription') }}</n-p>
          
          <n-h3>{{ t('base.seo.howItWorksTitle') }}</n-h3>
          <n-p>{{ t('base.seo.howItWorksDescription') }}</n-p>
          
          <n-h3>{{ t('base.seo.benefitsTitle') }}</n-h3>
          <n-ul>
            <n-li>{{ t('base.seo.benefit1') }}</n-li>
            <n-li>{{ t('base.seo.benefit2') }}</n-li>
            <n-li>{{ t('base.seo.benefit3') }}</n-li>
            <n-li>{{ t('base.seo.benefit4') }}</n-li>
          </n-ul>
        </n-card>
      </section>

      <!-- Third Ad Slot -->
      <section class="ad-slot">
        <div class="ad-placeholder">
          <!-- Google AdSense 底部广告位 -->
          <div style="text-align: center; padding: 20px; background: #f5f5f5; border: 1px dashed #ccc;">
            Google 广告位 3 (728x90 或 300x250)
          </div>
        </div>
      </section>
    </div>
  </MainContainer>
</template>

<script setup lang="ts">
import { NH2, NH3, NP, NCard, NUl, NLi } from 'naive-ui'

import TheIndexViewHead from '@/components/Misc/TheIndexViewHead.vue'
import TheFeatures from '@/components/Features/TheFeatures.vue'
import MainContainer from '@/components/MainContainer.vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

useHead({
  title: t('base.title'),
  meta: [{ name: 'description', content: t('base.description') }]
})
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.features-section {
  padding: 60px 0;
}

.seo-content {
  padding: 60px 0;
  max-width: 800px;
  margin: 0 auto;
}

.ad-slot {
  padding: 30px 0;
  display: flex;
  justify-content: center;
}

.ad-placeholder {
  max-width: 100%;
}

@media (max-width: 768px) {
  .page-container {
    padding: 0 10px;
  }
  
  .hero-section {
    min-height: 80vh;
  }
  
  .features-section,
  .seo-content {
    padding: 40px 0;
  }
  
  .ad-slot {
    padding: 20px 0;
  }
}
</style>
