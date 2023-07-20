<script>
import { store } from "../components/store.js"; //Dela state mellan komponenter

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
  <div class="col-" id="r">
    <h3>Testar Reactivity Api</h3>
    <p>
      Det här har egentligen ingenting med "Att göra"-appen att göra, men tryck
      på knappen för att räkna upp en räknare (som använder Reactivity API för
      delad state management mellan komponenter) så kommer även räknaren i
      footern att visa samma värde. :-) Den här tekniken använder jag för att
      "skicka data" mellan olika views (Inom en och samma view kan man ju
      använda props & emits).
    </p>
    <button @click="store.test++">Räkna</button>
    <p>Räknare: {{ store.test }}</p>
  </div>
</template>

<style>
#r {
  margin-top: 150px;
}
</style>
