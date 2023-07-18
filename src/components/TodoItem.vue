<script></script>

<template>
  <article class="card">
    <h3 class="card-header">Titel</h3>
    <div class="card-body">
      <h4 class="card-subtitle mb-2 text-body-secondary">
        Status: Ej slutförd
      </h4>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod
        amet saepe explicabo eum esse dolore necessitatibus totam sit, sequi
        debitis vitae quasi omnis consequuntur deserunt quaerat rerum quae.
        Cupiditate!
      </p>
      <button class="btn btn-success card-link">Slutförd</button>
      <button class="btn btn-warning card-link">
        <RouterLink to="/edit" class="routerlink">Redigera</RouterLink>
      </button>
      <button class="btn btn-danger card-link">Radera</button>
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
