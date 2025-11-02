<template>
  <div class="card">
    <!-- Header -->
    <div v-if="title || $slots.header" class="card-header">
      <slot name="header">
        <h2 class="card-title">{{ title }}</h2>
      </slot>
    </div>

    <!-- Body -->
    <div class="card-body">
      <slot>
        <p class="card-text">{{ description }}</p>
      </slot>
    </div>

    <!-- Footer -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 400px;
  margin: 16px auto;
  background-color: #fff;
  transition: all 0.25s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #f5f5f5;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}
.card-title {
  margin: 0;
  font-size: 1.4rem;
  color: #333;
}
.card-body {
  padding: 16px;
}
.card-text {
  margin: 0;
  font-size: 1rem;
  color: #555;
}
.card-footer {
  padding: 16px;
  border-top: 1px solid #ddd;
  text-align: right;
}
</style>
