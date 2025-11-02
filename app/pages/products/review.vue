<template>
    <section>
      
          
      
        <ClientOnly>
  <lazyLoadingSection />
        </ClientOnly>
    </section>
</template>

<script setup>
const lazyLoadingSection = defineAsyncComponent(() => 
    import('@/components/review.vue')
)
</script>