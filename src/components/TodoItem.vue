<script>
export default {
  props: {
    id: String,
    title: String,
    status: Number,
    text: String,
  },
  computed: {
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
          message = "";
      }
      return message;
    },
  },
  methods: {
    updateToDone() {
      console.log("Skall uppdatera till done: " + this.id);
    },
    deleteTodo() {
      console.log("Skall radera Todo: " + this.id);
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
        <RouterLink to="/edit/" class="routerlink">Redigera</RouterLink>
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
