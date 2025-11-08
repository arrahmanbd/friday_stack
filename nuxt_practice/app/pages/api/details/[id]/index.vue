<template>
  <div class="container py-5">
    <h3>Todo Details</h3>

    <input v-model.number="todoID" type="number" placeholder="Enter todo ID" class="form-control mb-3" />
    <button class="btn btn-primary mb-3" @click="getTodo" :disabled="todoDetailStore.loading">
      Fetch Todo
      <span v-if="todoDetailStore.loading" class="spinner-border spinner-border-sm ms-2"></span>
    </button>

    <div v-if="todoDetailStore.error" class="alert alert-danger">{{ todoDetailStore.error }}</div>

    <div v-if="todoDetailStore.todo" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ todoDetailStore.todo.title }}</h5>
        <p>Status:
          <span :class="todoDetailStore.todo.completed ? 'text-success' : 'text-warning text-dark'">
            {{ todoDetailStore.todo.completed ? 'Completed' : 'Pending' }}
          </span>
        </p>
        <p>Todo ID: {{ todoDetailStore.todo.id }}</p>
        <p>User ID: {{ todoDetailStore.todo.userId }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTodoDetailStore } from '@/stores/todoDetails.js'

// make a ref of todoID
const todoID= ref(0)
const todoDetailStore = useTodoDetailStore()
const route = useRoute()

// Automatically fetch todo when page loads
onMounted(() => {
  const id = route.params.id
  if (id) {
    todoDetailStore.fetchTodoDetail(id)
  }
})
const getTodo = () => { todoDetailStore.fetchTodoDetail(todoID.value) }

</script>
