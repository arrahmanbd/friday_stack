<template>
  <div class="container py-5" style="max-width: 400px;">
    <h3 class="mb-4">Pinia Counter Example</h3>

    <div class="card shadow-sm p-3 text-center">
      <p class="mb-2"><strong>Count:</strong> {{ counter.count }}</p>
      <p class="mb-3"><strong>Double Count:</strong> {{ counter.doubleCount }}</p>

      <div class="d-flex justify-content-between">
        <button class="btn btn-danger" @click="counter.decrement">- Decrease</button>
        <button class="btn btn-success" @click="counter.increment">+ Increase</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
}
</style>
