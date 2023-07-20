<script>
import EditItemForm from "../components/EditItemForm.vue";
import { store } from "../components/store.js";

export default {
  components: {
    EditItemForm,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h1>Redigera Todo:</h1>
  <EditItemForm />
</template>

<style></style>
