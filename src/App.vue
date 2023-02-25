<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex justify-start gap-4">
        <RouterLink to="/" class="text-xl text-black hover:text-opacity-70 p-4">Places</RouterLink>
        <RouterLink to="/about" class="text-xl text-black hover:text-opacity-70 p-4">About</RouterLink>
        <RouterLink to="/starred" class="text-xl text-black hover:text-opacity-70 p-4">Starred</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-bottom: 50px;

}

.header__heading {
  font-family: 'Open Sans', sans-serif;
  font-size: 50px;
  text-shadow: 1px 1px 15px #fa866a;
  color: #fa7232;
}

.router-link-exact-active {
  border-bottom: 2px #fa7232 solid;
}

</style>
