<script></script>

<template>
  <label class="form-label">Rubrik:</label>
  <input
    class="form-control"
    type="text"
    name="rubrik"
    id="rubrik"
    placeholder="Rubrik"
  />
  <label class="form-label">Beskrivning:</label>
  <input
    class="form-control"
    type="text"
    name="beskrivning"
    id="beskrivning"
    placeholder="Beskrivning"
  />
  <input type="hidden" name="id" id="id" />

  <input
    type="submit"
    value="Uppdatera!"
    class="btn btn-primary padding-4 mt-2"
  />

  <span id="message">{{ resultMessage }}</span>
</template>

<style scoped></style>
