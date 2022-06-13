<template>
    <div class="item">
      <div>
        <span
            @click="changeCompleted(index)"
            v-if="item.completed"
            class="complete"
        >✅</span>

        <span
            @click="changeCompleted(index)"
            v-else
            class="complete"
        >❌</span>

        <span :class="item.completed ? 'unText' : 'text'">{{item.title}}</span>
      </div>

      <span
          class="delete"
          @click="deleteTodo(index)"
      >
        🗑
      </span>
    </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  props: {
    index: Number,
    item: Object,
  },
  methods: {
    ...mapMutations({
      deleteStoreTodo: 'todo/deleteTodo',
      changeStoreCompleted: 'todo/changeTodoCompleted'
    }),
    changeCompleted(index){
      this.changeStoreCompleted(index)
    },
    deleteTodo(index){
      this.deleteStoreTodo(index)
    }
  }
}
</script>

<style>
  .item {
    list-style-type: none;
    border: 1px solid black;
    padding: 10px;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .complete {
    cursor: pointer;
  }

  .delete {
    cursor: pointer;
  }

  .text {
    margin-left: 5px;
  }

  .unText {
    text-decoration: line-through;
    margin-left: 5px;
  }
</style>