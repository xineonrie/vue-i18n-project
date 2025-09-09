import { createStore } from 'vuex'
import { i18nModule } from '../i18n/i18n'
import type { InjectionKey } from 'vue'
import type { Store } from 'vuex/types/index.js'

export interface RootState {
    i18n: { locale: string; loaded: Record<string, true> }
  }
export const key: InjectionKey<Store<RootState>> = Symbol('vuex-key')


export const store = createStore<RootState>({
    modules: { i18n: i18nModule },
  })
  
  export default store