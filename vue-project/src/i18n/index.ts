import { createI18n, type Locale } from 'vue-i18n'
import { storage } from '../utils/storage'

const FALLBACK = 'en'
const RTL_PREFIXES = ['ar']

export const i18n = createI18n({
    legacy: false,
    locale: FALLBACK,
    fallbackLocale: FALLBACK,
    messages: { [FALLBACK]: {} }as Record<string, any>
  })

async function loadMessages(locale: string) {
    const mod = await import(`../locales/${locale}.json`) // For chrunk split or fetch message package from server
    return mod.default || mod
}

export async function setLocale(locale: string) {
    if(!i18n.global.availableLocales.includes(locale)){
        // For language packages that haven't been loaded
        const msgs = await loadMessages(locale)
        i18n.global.setLocaleMessage(locale, msgs)
    }
    i18n.global.locale.value = locale
    document.documentElement.setAttribute('lang', locale) // set html language tag
    const isRtl = RTL_PREFIXES.some(p => locale.startsWith(p)) // if RTL, just prefixes check
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr')
    // save current option into storage (*web/android/ios)
    storage.set('locale',locale)
}

export async function initLocale() {
    const url = new URL(window.location.href)
    const q = url.searchParams.get('lang')
    const saved = await storage.get('locale') 
    const browser = navigator.language || FALLBACK
    const initial = q || saved || browser || FALLBACK
    await setLocale(initial)

}