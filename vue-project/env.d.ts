/// <reference types="vite/client" />
/// <reference path="./node_modules/vuex/types/index.d.ts" />
/// <reference path="./node_modules/vuex/types/helpers.d.ts" />
/// <reference path="./node_modules/vuex/types/logger.d.ts" />

declare module 'vuex' {
  import type { InjectionKey } from 'vue';

  export interface Store<S = any> {
    state: S;
    getters: any;
    commit: (type: string, payload?: any) => void;
    dispatch: (type: string, payload?: any) => Promise<any>;
  }

  export interface StoreOptions<S = any> {
    state?: S | (() => S);
    getters?: Record<string, (state: S, getters: any, rootState?: any, rootGetters?: any) => any>;
    mutations?: Record<string, (state: S, payload?: any) => any>;
    actions?: Record<string, (ctx: any, payload?: any) => any>;
    modules?: Record<string, Module<any, any>>;
    plugins?: any[];
    strict?: boolean;
  }


  export interface Module<S, R> {
    state?: S | (() => S);
    getters?: any;
    mutations?: any;
    actions?: any;
    modules?: Record<string, Module<any, R>>;
    namespaced?: boolean;
  }

  export function createStore<S = any>(options: StoreOptions<S>): Store<S>;
  export function useStore<S = any>(key?: InjectionKey<Store<S>>): Store<S>;
  export function createLogger(options?: any): any;
}