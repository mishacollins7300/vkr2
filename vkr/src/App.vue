<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/Header/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>
  <div class='h-full pt-14  '>
    <RouterView />
  </div>

</template>

<style scoped>

</style>
