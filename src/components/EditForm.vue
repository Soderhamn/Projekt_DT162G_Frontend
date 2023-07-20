<script>
export default {
  props: {
    id: String,
    title: String,
    status: Number,
    text: String,
  },
  emits: ["update:id", "update:title", "update:status", "update:text"],
  methods: {
    async updateTodo() {
      let res = await fetch("http://127.0.0.1:3000/todoList/" + this.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: this.id,
          todoTitle: this.title,
          todoDescription: this.text,
          todoIsDone: this.status,
        }),
      });
      this.todos = await res.json();
    },
  },
};
</script>

<template>
  <label class="form-label">Rubrik:</label>
  <input
    class="form-control"
    type="text"
    name="rubrik"
    id="rubrik"
    placeholder="Rubrik"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
  <label class="form-label">Beskrivning:</label>
  <input
    class="form-control"
    type="text"
    name="beskrivning"
    id="beskrivning"
    placeholder="Beskrivning"
    :value="text"
    @input="$emit('update:text', $event.target.value)"
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
