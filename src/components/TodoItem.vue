<script>
import { store } from "./store.js"; //Dela state mellan komponenter

export default {
  props: {
    //Props som skickas till komponenten från föräldern
    id: String,
    title: String,
    status: Number,
    text: String,
  },
  emits: ["itemchanged"],
  data() {
    return {
      store, //Lagra data som flea komponenter kommer åt
    };
  },
  computed: {
    //Översätt "statuskod"/siffra till meddelande
    writeStatusMessage() {
      let message = "";
      switch (this.status) {
        case 0:
          message = "Ej slutförd";
          break;
        case 1:
          message = "Slutförd";
          break;
        /* Kan lägga till fler statusar i framtiden, tex: case 2: message = "Pausad"; break; */
        default:
          message = "Okänd";
      }
      return message;
    },
  },
  methods: {
    //Uppdatera från "Ej slutförd" till "slutförd"
    async updateToDone() {
      //console.log("Skall uppdatera till done: " + this.id);

      let res = await fetch("http://127.0.0.1:3000/todoList/" + this.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: this.id,
          todoTitle: this.title,
          todoDescription: this.text,
          todoIsDone: 1, //1 = slutförd
        }),
      });
      this.todos = await res.json();

      this.$emit("itemchanged"); //emit (meddelande) till föräldrakomponent, så att den kan ladda om listan
    },
    //Radera en todo (örs vid tryck på radera-knapp)
    async deleteTodo() {
      //console.log("Skall radera Todo: " + this.id);

      let res = await fetch("http://127.0.0.1:3000/todoList/" + this.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: this.id,
        }),
      });
      this.todos = await res.json();

      this.$emit("itemchanged");
    },
  },
};
</script>

<template>
  <article class="card">
    <h3 class="card-header">{{ title }}</h3>
    <div class="card-body">
      <h4 class="card-subtitle mb-2 text-body-secondary">
        Status: {{ writeStatusMessage }}
        <!--Skriv ut slutförd / ej slutförd beroende på status (1 = slutförd, 0 = ej slutförd)-->
      </h4>
      <p class="card-text">{{ text }}</p>
      <button class="btn btn-success card-link" @click="updateToDone">
        Slutförd
      </button>
      <button class="btn btn-warning card-link">
        <RouterLink
          @click="store.editId = id"
          :to="{ path: '/edit/' }"
          class="routerlink"
          >Redigera</RouterLink
        >
      </button>
      <button class="btn btn-danger card-link" @click="deleteTodo">
        Radera
      </button>
    </div>
  </article>
</template>

<style scoped>
.btn {
  float: right;
  margin-right: 16px;
}

.routerlink {
  color: white;
  text-decoration: none;
}
</style>
