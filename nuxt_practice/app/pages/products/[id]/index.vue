<!-- Nested route -->
 <template>
    <div>
        <h2>Product Dynamic About</h2>
        <p>You are viewing product ID: {{ route.params.id }}</p>
        <NuxtLink to ='/products/about'>Product About</NuxtLink>
    </div>
 </template>

 <script setup>
    const route = useRoute();
</script>