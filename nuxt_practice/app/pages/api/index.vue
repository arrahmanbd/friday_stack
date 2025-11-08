<template>
  <div class="container py-5" style="max-width: 600px;">
    <h3 class="mb-4">Todo List (Pinia + API)</h3>

    <button class="btn btn-primary mb-3" @click="todoStore.fetchTodos(true)" :disabled="todoStore.loading">
      Fetch Todos
      <span v-if="todoStore.loading" class="spinner-border spinner-border-sm ms-2"></span>
    </button>

    <!-- Error State -->
    <div v-if="todoStore.error" class="alert alert-danger alert-dismissible fade show">
      {{ todoStore.error }}
      <button type="button" class="btn-close" aria-label="Close" @click="todoStore.error = null"></button>
    </div>

    <!-- Todo List -->
    <ul class="list-group">
      <li
        v-for="todo in todoStore.todos"
        :key="todo.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <!-- Navigate to details on click -->
        <NuxtLink :to="`/api/details/${todo.id}`" class="text-decoration-none">
          {{ todo.title }}
        </NuxtLink>
        <span :class="todo.completed ? 'badge bg-success' : 'badge bg-warning text-dark'">
          {{ todo.completed ? 'Completed' : 'Pending' }}
        </span>
      </li>

      <li v-if="todoStore.todos.length === 0 && !todoStore.loading" class="list-group-item text-center text-muted">
        No todos available
      </li>
    </ul>

    <!-- Load More Button -->
    <div v-if="todoStore.hasMore && todoStore.todos.length != 0" class="text-center mt-3">
      <button class="btn btn-outline-primary" @click="todoStore.fetchTodos()" :disabled="todoStore.loadingMore">
        Load More
        <span v-if="todoStore.loadingMore" class="spinner-border spinner-border-sm ms-2"></span>
      </button>
    </div>

    <!-- <div v-else class="text-center mt-3 text-muted">
      No more todos
    </div> -->
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()

</script>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
}
</style>
