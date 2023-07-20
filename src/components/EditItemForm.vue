<script>
import { store } from "./store.js";

export default {
  data() {
    return {
      id: "",
      title: "",
      text: "",
      status: null,
      statusText: "",
    };
  },
  methods: {
    //Metod för att uppdatera en "Todo"
    async updateTodo() {
      console.log(
        JSON.stringify({
          _id: this.id,
          todoName: this.title,
          todoDesc: this.text,
          todoIsDone: this.status,
        })
      );

      let res = await fetch("http://127.0.0.1:3000/todoList/" + this.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: this.id,
          todoName: this.title,
          todoDesc: this.text,
          todoIsDone: this.status,
        }),
      });

      this.statusText = "Uppdatering genomförd";
    },
  },
  async mounted() {
    this.id = store.editId;

    //Läs in en enskild Todo vid komponent-inladdning
    let res = await fetch(`http://127.0.0.1:3000/todoList/${this.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await res.json();

    this.title = result.todoTitle;
    this.text = result.todoDescription;
    this.status = result.todoIsDone;
  },
};
</script>

<template>
  {{ statusText }}
  <label class="form-label">Rubrik:</label>
  Id: {{ this.id }} <br />
  <input
    class="form-control"
    type="text"
    name="rubrik"
    id="rubrik"
    placeholder="Rubrik"
    v-model="title"
  />
  <label class="form-label">Beskrivning:</label>
  <input
    class="form-control"
    type="text"
    name="beskrivning"
    id="beskrivning"
    placeholder="Beskrivning"
    v-model="text"
  />

  <input
    type="submit"
    value="Uppdatera!"
    class="btn btn-primary padding-4 mt-2"
    @click="updateTodo"
  />

  <!--<span id="message">{{ resultMessage }}</span>-->
</template>

<style scoped></style>
