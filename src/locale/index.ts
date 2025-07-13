import { createI18n } from 'vue-i18n'

import { en } from './en'
import { zhCN } from './zh-CN'
import { zhTW } from './zh-TW'

// 获取浏览器语言并映射到支持的语言
const getBrowserLocale = (): string => {
  const browserLang = navigator?.language
  if (!browserLang) return 'en'
  
  // 简体中文
  if (browserLang.includes('zh-CN') || browserLang.includes('zh-Hans')) {
    return 'zh-CN'
  }
  // 繁体中文
  if (browserLang.includes('zh-TW') || browserLang.includes('zh-Hant') || 
      browserLang.includes('zh-HK') || browserLang.includes('zh-MO')) {
    return 'zh-TW'
  }
  // 其他中文方言默认为简体中文
  if (browserLang.startsWith('zh')) {
    return 'zh-CN'
  }
  // 英文
  if (browserLang.startsWith('en')) {
    return 'en'
  }
  
  // 默认英文
  return 'en'
}

const currentLocale = getBrowserLocale()

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

const i18n = createI18n({
  locale: currentLocale,
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    en,
    'zh-CN': zhCN,
    'zh-TW': zhTW
  } as { [key: string]: DeepPartial<typeof en> }
})

export default i18n
