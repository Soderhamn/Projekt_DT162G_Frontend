<script>
export default {
  data() {
    return {
      title: "",
      text: "",
      statusMessage: "",
      status: 0,
    };
  },
  emits: ["itemchanged"],
  methods: {
    //Skapa en ny "Todo"
    async createTodo() {
      let res = await fetch("http://127.0.0.1:3000/todoList/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todoName: this.title,
          todoDesc: this.text,
          todoIsDone: this.status,
        }),
      });
      let result = await res.json();
      this.statusMessage = result.status; // Status från apiet i meddelandet

      this.$emit("itemchanged"); //För att trigga uppdatering av lista
    },
  },
};
</script>

<template>
  <h2>Skapa ny Todo:</h2>
  <label class="form-label">Rubrik:</label>
  <input
    class="form-control"
    type="text"
    name="rubrik"
    id="rubrik"
    placeholder="Rubrik"
    v-model="this.title"
  />
  <label class="form-label">Beskrivning:</label>
  <input
    class="form-control"
    type="text"
    name="beskrivning"
    id="beskrivning"
    placeholder="Beskrivning"
    v-model="this.text"
  />

  <input
    type="submit"
    value="Skapa ny!"
    class="btn btn-primary padding-4 mt-2"
    @click="createTodo"
  />

  <p id="statusMessage">{{ statusMessage }}</p>
</template>

<style>
#statusMessage {
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}
</style>
