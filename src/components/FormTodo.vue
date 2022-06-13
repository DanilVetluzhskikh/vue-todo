<template>
  <input
      class="input"
      type="text"
      @input="changeInput"
      :value="value"
      @keydown="addTodo"
  />

  <div class="error" v-if="error.length">{{error}}</div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data(){
    return {
      value: '',
      error: '',
    }
  },
  methods: {
    ...mapMutations({
      addStoreTodo: 'todo/addTodo',
    }),
    changeInput(e){
      this.value = e.target.value
    },
    addTodo(e){
      if(e.key === 'Enter'){
        if(!this.value.trim().length){
          return this.error = 'Ошибка'
        }

        this.addStoreTodo({
          completed: false,
          title: this.value
        })

        this.error = ''
        this.value = ''
      }
    }
  }
}
</script>

<style>
  .input {
    width: 200px;
    font-size: 18px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
  }
  .error {
    color: red;
    font-size: 22px;
  }
</style>