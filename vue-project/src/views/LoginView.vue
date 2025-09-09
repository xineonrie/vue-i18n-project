<template>
  <div class="about">
    <BaseThreePane>
      <section class="main">
        <LanguageSwitcher class="switcher" />
        <img src="../assets/main-icon.png" class="main-icon" />
        <p class="title">{{ t('loginTitle1') }}<br>{{ t('loginTitle2') }}</p>
        <div>
          <span>{{ t('loginInfo') }}</span>
          <span class="sign-up">{{ t('register') }}</span>
        </div>
        <a-form 
          class="form"
          :model="formState"
          @finish="onFinish"
        >
          <a-form-item
          name="username"
          :rules="[{ required: true, message: t('userWarning') }]"
        >
          <a-input 
            class="input" 
            :placeholder="t('userNamePlaceHolder')"
            v-model:value="formState.username"
          />
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: t('passwordWarning') }]"
        >
          <a-input-password class="input" :placeholder="t('passwordPlaceHolder')" v-model:value="formState.password" />
        </a-form-item>
        <a-form-item>
          <a-button class="login-btn" type="default" html-type="submit">{{ t("login") }}</a-button>
        </a-form-item>
        </a-form>
        <span><u>{{ t("forgetPassword") }}</u></span>
      </section>
    </BaseThreePane>
  </div>
</template>

<script  setup lang="ts">
import BaseThreePane from '@/components/BaseThreePane.vue'
import { reactive } from 'vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useI18n } from 'vue-i18n'
import { request, realRequest } from '@/utils/request'
import store from '@/store';
import router from '@/router';

const { t } = useI18n()

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});

async function onFinish (values: any){  
  const res = await request({
    api:'/api/login',
    method: 'POST',
    payload: values
  })

  if(res.ok) {
    store.commit('USER_LOGIN')
    const route = router.currentRoute.value
    const redirect = (route.query.redirect as string | undefined) || '/home'
    await router.replace(redirect)
  }

};
</script>

<style>
.switcher {
  position: absolute;
  top: 24px;
  right: 24px;
}

  .about {
    min-height: 100dvh;
    width: 100dvw;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    background-image: url('../assets/LoginBgImg.png');
    background-size: cover;
    flex-wrap: wrap;
    gap: 16px;
    box-sizing: border-box;
  }

  .form {
    margin-top: 10dvh;
  }

  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;
  }

  .login-btn {
    width: 100%;
    font-weight: bold;
    color: #009951;
  }

  .main-icon {
    width: 64px;
    height: 64px;
    margin-top: 10dvh;
    margin-top: 5dvh;
  }

  .title {
    font-size: var(--fs-h1);
    font-weight: bold;
    text-align: center;
  }

  .sign-up {
    font-weight: bold;
    margin-left: 4px;
    color: #02542D;
  }

  .input {
    height: 40px;
  }
</style>
