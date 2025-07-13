<template>
  <div class="ad-slot" :class="[`ad-slot--${type}`, `ad-slot--${size}`]">
    <div class="ad-placeholder">
      <!-- Google AdSense 广告位 -->
      <div class="ad-content">
        <span class="ad-label">{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: 'banner' | 'rectangle' | 'sidebar'
  size: 'small' | 'medium' | 'large'
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: 'Google Ad'
})
</script>

<style scoped>
.ad-slot {
  margin: 15px 0;
  display: flex;
  justify-content: center;
}

.ad-placeholder {
  background: #f8f9fa;
  border: 1px dashed #dee2e6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.ad-placeholder:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

.ad-content {
  color: #6c757d;
  font-size: 14px;
  text-align: center;
  padding: 10px;
}

.ad-label {
  font-weight: 500;
}

/* 横幅广告 */
.ad-slot--banner.ad-slot--large .ad-placeholder {
  width: 728px;
  height: 90px;
}

.ad-slot--banner.ad-slot--medium .ad-placeholder {
  width: 468px;
  height: 60px;
}

.ad-slot--banner.ad-slot--small .ad-placeholder {
  width: 320px;
  height: 50px;
}

/* 矩形广告 */
.ad-slot--rectangle.ad-slot--large .ad-placeholder {
  width: 336px;
  height: 280px;
}

.ad-slot--rectangle.ad-slot--medium .ad-placeholder {
  width: 300px;
  height: 250px;
}

.ad-slot--rectangle.ad-slot--small .ad-placeholder {
  width: 250px;
  height: 200px;
}

/* 侧边栏广告 */
.ad-slot--sidebar.ad-slot--large .ad-placeholder {
  width: 160px;
  height: 600px;
}

.ad-slot--sidebar.ad-slot--medium .ad-placeholder {
  width: 120px;
  height: 240px;
}

.ad-slot--sidebar.ad-slot--small .ad-placeholder {
  width: 100%;
  height: 100px;
  max-width: 300px;
}

/* 响应式 */
@media (max-width: 768px) {
  .ad-slot--banner.ad-slot--large .ad-placeholder,
  .ad-slot--banner.ad-slot--medium .ad-placeholder {
    width: 320px;
    height: 50px;
  }
  
  .ad-slot--rectangle.ad-slot--large .ad-placeholder,
  .ad-slot--rectangle.ad-slot--medium .ad-placeholder {
    width: 300px;
    height: 250px;
  }
  
  .ad-slot--sidebar .ad-placeholder {
    width: 100%;
    height: 100px;
  }
}
</style>