<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container-xl">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Marcus TodoList</RouterLink>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"></li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Start (TodoList)</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">Om denna sida</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="container">
    <RouterView />
  </main>

  <footer class="footer">
    <p>
      Projekt i kurs DT162G<br />
      Av: Marcus Andersson<br />
      <a href="mailto:maan2117@student.miun.se">maan2117@student.miun.se</a>
    </p>
  </footer>
</template>

<style scoped>
main {
  height: 100%;
  overflow-y: scroll;
}
</style>
