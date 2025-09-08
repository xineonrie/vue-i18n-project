<template>
  <div class="about">
    <BaseThreePane>
      <section class="main">
        <LanguageSwitcher class="switcher" />
        <img src="../assets/main-icon.png" class="main-icon" />
        <p class="title">Sign in to your<br>Account</p>
        <div>
          <span>Don't have an account?</span>
          <span class="sign-up">Sign Up</span>
        </div>
        <a-form class="form">
          <a-form-item
          name="username"

        >
          <a-input class="input" placeholder="username" v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          name="password"
        >
          <a-input-password  class="input" placeholder="password" v-model:value="formState.password" />
        </a-form-item>
        <a-form-item>
          <a-button class="login-btn" type="default" html-type="submit">Login</a-button>
        </a-form-item>
        </a-form>
        <span><u>Forgot Your Password ?</u></span>
      </section>
    </BaseThreePane>
  </div>
</template>

<script  setup lang="ts">
import BaseThreePane from '@/components/BaseThreePane.vue'
import { reactive } from 'vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

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
