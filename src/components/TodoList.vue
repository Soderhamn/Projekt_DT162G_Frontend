<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async updateTodoList() {
      //Kör denna när knappen "uppdatera listan" klickas på
      console.log("Ska ladda in todos");
      let res = await fetch("http://127.0.0.1:3000/todoList/");
      this.todos = await res.json();
      console.log(this.todos);
    },
  },
  async mounted() {
    let res = await fetch("http://127.0.0.1:3000/todoList/");
    this.todos = await res.json();
    console.log(this.todos);
  },
};
</script>

<template>
  <button @click="updateTodoList">Uppdatera listan</button>

  <TodoItem
    v-for="todo in todos"
    :key="todo._id"
    :id="todo._id"
    :title="todo.todoTitle"
    :status="todo.todoIsDone"
    :text="todo.todoDescription"
  />

  <!--<TodoItem id="123" title="Test" status="0" text="Testar detta" />-->
</template>

<style scoped>
.card {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
