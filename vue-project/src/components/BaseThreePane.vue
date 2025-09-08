<!-- src/components/BaseThreePane.vue -->
<template>
    <section class="three-pane">
      <aside class="sidebar">
        <slot name="sidebar" />
      </aside>
  
      <main class="main">
        <slot />
      </main>
  
      <aside class="queue">
        <slot name="queue" />
      </aside>
    </section>
  </template>
  
  <style scoped>
.three-pane {
  /* fixed main */
  --gap: 16px;
  /* main: min-width 325px max-width 600px */
  --main-w: clamp(325px, 30vw, 600px);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr var(--main-w) 1fr;
  gap: var(--gap);
  min-height: 100%;
}
  
  /* ipad: sidebar + main */
  @media (max-width: 1024px) {
    .three-pane {
      grid-template-columns: var(--sidebar-w) 1fr;
    }
    .queue { display: none; }
  }
  
  /* mobile phone: only main */
  @media (max-width: 768px) {
    .three-pane {
      grid-template-columns: 1fr;
    }
    .sidebar,
    .queue { display: none; }
  }
  
  .sidebar, .queue {
    overflow: auto;
  }
  .main {
    min-width: 0;      
    overflow: auto;
  }
  </style>
  