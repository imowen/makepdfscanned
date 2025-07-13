<template>
  <MainContainer>
    <!-- 顶部横幅广告 -->
    <AdSlot type="banner" size="large" label="Google AdSense - 横幅广告 (728x90)" />
   
    <n-grid x-gap="25" y-gap="25" :cols="12" item-responsive responsive="screen">
      <n-grid-item span="12 s:5 m:4 l:3">
        <n-space vertical>
          <PDFUpload @update:pdf="pdf = $event" />
          <PDFInfo :pdf="pdf" v-if="pdf" />

          <ScanSettingsCard v-model:config="config" />

          <SaveButtonCard
            @generate="generate"
            :progress="progress"
            :saving="saving"
            :pdf="scannedPDF"
          />
          
          <!-- 左侧栏底部广告 -->
          <AdSlot type="rectangle" size="medium" label="Google AdSense - 矩形广告 (300x250)" />
        </n-space>
      </n-grid-item>
      <n-grid-item span="12 s:7 m:8 l:9">
        <n-space vertical>
          <!-- 右侧栏顶部广告 -->
          <AdSlot type="banner" size="medium" label="Google AdSense - 横幅广告 (468x60)" />
          
          <PreviewCompare
            :pdfRenderer="pdfRenderer"
            :scanRenderer="scanRenderer"
            :scale="config.scale"
          />
          
          <!-- 右侧栏底部广告 -->
          <AdSlot type="rectangle" size="small" label="Google AdSense - 小矩形广告 (250x200)" />
        </n-space>
      </n-grid-item>
    </n-grid>
  </MainContainer>
</template>

<script lang="ts" setup>
import { NGrid, NGridItem, NSpace } from 'naive-ui'
import MainContainer from '@/components/MainContainer.vue'
import AdSlot from '@/components/ads/AdSlot.vue'
import { type ScanConfig, defaultConfig, CanvasScanner } from '@/utils/scan-renderer/canvas-scan'
import ScanSettingsCard from '@/components/scan-settings/ScanSettingsCard.vue'
import PDFUpload from '@/components/pdf-upload/PDFUpload.vue'
import { ref, computed, watch } from 'vue'
import PDFURL from '@/assets/examples/pdfs/test.pdf'
import BackToIndex from '@/components/buttons/BackToIndex.vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { PDF } from '@/utils/pdf-renderer/pdfjs'
import PreviewCompare from '@/components/page-preview/PreviewCompare.vue'
import SaveButtonCard from '@/components/save-button/SaveButtonCard.vue'
import { useSaveScannedPDF } from '@/composables/save-scanned-pdf'
import PDFInfo from '@/components/pdf-upload/PDFInfo.vue'
import { ScanCacher } from '@/utils/scan-renderer/scan-cacher'
import { useMessage } from 'naive-ui'

const { t } = useI18n()
const message = useMessage()

useHead({
  title: t('base.scanTitle') + ' - ' + t('base.title'),
  meta: [{ name: 'description', content: t('base.description') }]
})

const pdf = ref<File | undefined>(undefined)

const initExamplePDF = async () => {
  const response = await fetch(PDFURL)
  const blob = await response.blob()
  const file = new File([blob], 'example.pdf')
  if (!pdf.value) {
    pdf.value = file
  }
}

initExamplePDF()

const config = ref<ScanConfig>(defaultConfig)
const pdfRenderer = computed(() => {
  if (!pdf.value) return

  return new PDF(pdf.value)
})

const scanRenderer = ref(new ScanCacher(new CanvasScanner(config.value)))
watch(
  config,
  (newConfig) => {
    scanRenderer.value = new ScanCacher(new CanvasScanner(newConfig))
  },
  { deep: true }
)

const scale = computed(() => config.value.scale)

const { save, progress, saving, scannedPDF } = useSaveScannedPDF(
  pdf,
  pdfRenderer,
  scanRenderer,
  scale
)

const generate = async () => {
  try {
    await save()
    message.success(t('actions.generateSuccess'))
  } catch (e) {
    message.error(t('actions.generateError') + (e as Error).message)
  }
}
</script>
