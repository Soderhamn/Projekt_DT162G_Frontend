<script>
import TodoList from "../components/TodoList.vue";

export default {
  data() {
    return {
      components: {
        TodoList,
      },
      resultMessage: "",
    };
  },
};
</script>

<template>
  <h1>Att göra-lista:</h1>
  <span> {{ resultMessage }}</span>
  <TodoList />
</template>
