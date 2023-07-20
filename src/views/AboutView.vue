<script>
import { store } from "../components/store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="col-">
    <h1>Om denna sida</h1>
    <p>
      Denna sida skapades som ett projekt i kursen DT162G - JavaScriptbaserad
      webbutveckling.
    </p>
    <h2>Teknologier som används:</h2>
    <ul>
      <li>Vue.js (Frontendramverk)</li>
      <li>Node & Express (Backend)</li>
      <li>MongoDB (Databas)</li>
      <li>Bootstrap (CSS-ramverk)</li>
    </ul>
  </div>
  <div class="col-">
    <h3>Reactivity Api</h3>
    <p>
      Räkna upp en räknare (som använder Reactivity API för delad state
      management mellan komponenter)
    </p>
    <button @click="store.test++">Räkna</button>
    <p>Räknare: {{ store.test }}</p>
  </div>
</template>

<style></style>
