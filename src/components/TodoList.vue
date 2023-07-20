<script>
import TodoItem from "./TodoItem.vue";

export default {
  data() {
    return {
      todos: [],
      components: {
        TodoItem,
      },
    };
  },
  async mounted() {
    /* Efter inladdning */
    let res = await fetch("http://127.0.0.1:3000/todoList/");
    this.todos = await res.json();
  },
};
</script>

<template v-for="todo in todos">
  <TodoItem
    id="{{ todo._id }}"
    title="{{ todo.todoTitle }}"
    status="{{ todo.todoIsDone }}"
    text="{{ todo.todoDescription }}"
  />
</template>

<style scoped>
.card {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
