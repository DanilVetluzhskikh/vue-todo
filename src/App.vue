<template>
  <div class="container">
    <div v-if="$store.state.todo.isLoading">Loading...</div>

    <div v-else class="container">
      <h1 class="title">My todo</h1>

      <form-todo />

      <list-todo />
    </div>
  </div>
</template>

<script>
import FormTodo from '@/components/FormTodo'
import ListTodo from "@/components/ListTodo";
import {mapActions} from 'vuex'
import '@/assets/index.css'

export default {
  components: {
    ListTodo,
    FormTodo
  },
  methods: {
    ...mapActions({
      fetchTodos: 'todo/fetchTodos'
    }),
  },
  mounted() {
    this.fetchTodos()
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    text-align: center;
    font-size: 32px;
    font-weight: 300;
  }
</style>
