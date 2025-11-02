<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- Follow the layout -->
     <NuxtLayout>
    <!-- Filebase routing -->
         <NuxtPage />
     </NuxtLayout>
  </div>
</template>

<!-- This is main entry Global Accesspoint -->


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>