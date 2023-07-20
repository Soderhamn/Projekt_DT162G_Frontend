<script>
import TodoList from "../components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      resultMessage: "",
    };
  },
};
</script>

<template>
  <!--<span> {{ resultMessage }}</span>-->
  <TodoList />
</template>
