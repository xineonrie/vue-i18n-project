import { createStore } from 'vuex'
import { i18nModule } from '../i18n/i18n'
import type { InjectionKey } from 'vue'
import type { Store } from 'vuex/types/index.js'

export interface I18nState {
    locale: string
    loaded: Record<string, true>
  }
  
  export interface RootState {
    isLogin: boolean
  }
  
export const key: InjectionKey<Store<RootState>> = Symbol('vuex-key')


export const store = createStore<RootState>({
    modules: { i18n: i18nModule },
    state:  () => (
        {
            isLogin: false
        }
    ),
    getters: {
      getIsLogin: (state) => state.isLogin
    },
    mutations:{
      USER_LOGIN:(state: RootState) => state.isLogin = true
    }

  })
  
  export default store