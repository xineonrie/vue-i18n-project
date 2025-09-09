<script setup lang="ts">
  import BaseThreePane from '@/components/BaseThreePane.vue'
</script>

<template>
  <div class="page">
    <BaseThreePane>
      <template v-slot:sidebar>
        <h1>This is a sidebar</h1>
      </template>

      <section class="main"> 
        <h1>This is a main page</h1>
      </section>

      <template v-slot:queue>
        <h1>This is a queue</h1>
      </template>
    </BaseThreePane>
  </div>

</template>

<style>
  .page {
    min-height: 100dvh;
    width: 100dvw;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
  }


  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;
  }
</style>
