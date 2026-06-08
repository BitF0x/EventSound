
<template>
  <HeadBar />
  
<main>
  <RouterView v-slot="{ Component}">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</main>

</template>

<style scoped>


main{
  width: 100%;
}















.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: scale(0.98);
  filter: blur(6px);
}

.page-leave-to {
  opacity: 0;
  transform: scale(1.02);
  filter: blur(6px);
}
</style>
<script setup></script>
