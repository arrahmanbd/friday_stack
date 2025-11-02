import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoDetailStore = defineStore('todoDetail', {
  state: () => ({
    todo: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchTodoDetail(id) {
      if (this.loading) return

      this.loading = true
      this.error = null
      this.todo = null

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        this.todo = response.data
      } catch (err) {
        console.error(err)
        this.error = err.message || 'Failed to fetch todo details'
      } finally {
        this.loading = false
      }
    }
  }
})
