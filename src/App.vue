<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">OnlineKozmetika</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link class="nav-link active" to="/">Bemutatkozás</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link class="nav-link" to="/services">Szolgáltatások</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link class="nav-link" to="/registration">Regisztráció</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link class="nav-link" to="/login">Bejelentkezés</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link class="nav-link" to="/myServices">Szolgáltatásaim</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style scoped></style>
