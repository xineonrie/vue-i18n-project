import { createI18n, type Locale } from 'vue-i18n'
import { storage } from '../utils/storage'

export const FALLBACK = 'en'
export const RTL_PREFIXES = ['ar']

export const i18n = createI18n({
    legacy: false,
    locale: FALLBACK,
    fallbackLocale: FALLBACK,
    messages: { [FALLBACK]: {} }as Record<string, any>
  })

export async function loadMessages(locale: string) {
    const mod = await import(`../locales/${locale}.json`) // For chrunk split or fetch message package from server
    return mod.default || mod
}

export const langList = [
    {
        "locale": "en",
        "name": "English"
    },
    {
        "locale" : "zh-CN",
        "name": "简体中文"
    },
    {
        "locale" : "ar",
        "name": "العربية"
    }
]