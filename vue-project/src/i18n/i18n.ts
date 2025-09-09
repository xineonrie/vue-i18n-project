import type { Module } from 'vuex'
import { i18n, loadMessages, FALLBACK, RTL_PREFIXES, langList } from './index'
import { storage } from '@/utils/storage'

export interface I18nState {
    locale: string
    loaded: Record<string, true>  // Language loaded
  }
  
const isRtl = (l: string) => RTL_PREFIXES.some(p => l.startsWith(p)) // if RTL, just prefixes check

const isLangSupported = (l: string) => langList.filter(item => item.locale === l).length > 0

export const i18nModule:Module<I18nState,any> = {
    namespaced: true,
    state: () => ({ locale: FALLBACK, loaded: {} }),
    mutations: {
        SET_LOCALE(s: I18nState, l:string) {s.locale = l},
        MARK_LOADED(s: I18nState, l:string) {s.loaded[l] = true}
    },
    actions: {
        async initLocale({ dispatch }: any) { // TODO: fix vuex type problems
            const url = new URL(window.location.href)
            const q = url.searchParams.get('lang') || undefined
            const saved = await storage.get('locale') || undefined
            const browser = navigator.language || FALLBACK
            const initial = q || saved || browser || FALLBACK
            console.log('current lang: ', initial)

            await dispatch('setLocale', initial)
        },
        async setLocale({ state, commit }: any, target: string) {
            let effective = target
            if (!isLangSupported(target)) {
                effective = FALLBACK
            }
            console.log(state.loaded)
            try {
                if(!state.loaded[target]) {
                    const msgs = await loadMessages(target)
                    i18n.global.setLocaleMessage(target, msgs)
                    commit('MARK_LOADED', target)
                    console.log(msgs)
                }
            } catch(e) {
                effective = FALLBACK
                console.log(`[i18n] load "${target}" failed, fallback -> "${FALLBACK}"`, e) //TODO: add monitor
                if(!state.loaded[FALLBACK]) {
                    try {
                        const msgs = await loadMessages(FALLBACK)
                        i18n.global.setLocaleMessage(FALLBACK, msgs)
                        commit('MARK_LOADED', FALLBACK)
                    } catch (e) {
                        console.log(`[i18n] load "${FALLBACK}" failed, fallback empty "`, e) //TODO: add monitor
                        i18n.global.setLocaleMessage(FALLBACK, {})
                }
            }
        }
            console.log('current language: ', effective)
            const url = new URL(window.location.href)
            console.log(url)
            i18n.global.locale.value = effective
            document.documentElement.setAttribute('lang', effective) // set html language tag
            document.documentElement.setAttribute('dir', isRtl(effective) ? 'rtl' : 'ltr')
            // save current option into storage (*web/android/ios)
            await storage.set('locale',effective)
        }

    },
    getters:{
        locale:(s : I18nState) => s.locale,
        isRtl:(s: I18nState) =>isRtl(s.locale)
    }
}