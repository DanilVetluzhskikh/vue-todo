<template>
  <span v-if="!$store.state.todo.todos.length">Задач нет</span>

  <ul
    class="list"
  >
    <li
        v-for="(item, index) in $store.state.todo.todos"
        :key="item+'__'+index"
    >
      <item-todo
        :index="index"
        :item="item"
      />
    </li>
  </ul>
</template>

<script>
import ItemTodo from "@/components/ItemTodo";

export default {
  components: {ItemTodo},
}
</script>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
</style>