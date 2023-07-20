<script>
import TodoItem from "./TodoItem.vue";
import NewItemForm from "../components/NewItemForm.vue";

export default {
  components: {
    TodoItem,
    NewItemForm,
  },
  data() {
    return {
      todos: [], //Array som kommer innehålla "todos"
    };
  },
  methods: {
    async updateTodoList() {
      //Kör denna när Emits mottas eller när knappen "uppdatera listan" klickas på
      console.log("Ska ladda in todos");
      let res = await fetch("http://127.0.0.1:3000/todoList/");
      this.todos = await res.json();
      console.log(this.todos);
    },
  },
  async mounted() {
    //Hämta lista med "att-göra" vid laddning av komponenten
    let res = await fetch("http://127.0.0.1:3000/todoList/");
    this.todos = await res.json();
    console.log(this.todos);
  },
};
</script>

<template>
  <NewItemForm @itemchanged="updateTodoList" />

  <h1>Lista:</h1>
  <!--Loopar igenom och skriver ut "Todos", lyssnar efter "itemchanged"-emit och uppdaterar listan ifall förändringar skett -->
  <TodoItem
    v-for="todo in todos"
    :key="todo._id"
    :id="todo._id"
    :title="todo.todoTitle"
    :status="todo.todoIsDone"
    :text="todo.todoDescription"
    @itemchanged="updateTodoList"
  />

  <!--Knapp för att manuellt uppdatera listan (behövs inte längre, men har varit bra under utveckling/test) -->
  <button @click="updateTodoList" class="btn btn-secondary">
    Uppdatera listan
  </button>
</template>

<style scoped>
.card {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
