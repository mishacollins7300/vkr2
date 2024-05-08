<template>
  <div class='w-full h-14 flex justify-between items-center px-4 shadow-md fixed z-50 bg-white'>
    <div class='flex items-center h-full gap-4'>
      <div class='w-full h-full logo'></div>
      <div>Главная</div>
      <div>Участники</div>
      <div @click="() => route.push('/create-event')">Создать мероприятие</div>
      <div>О нас</div>
    </div>
    <ProfileComponent></ProfileComponent>
  </div>
</template>

<script setup>
import ProfileComponent from './ProfileComponent.vue'
import { useRouter } from 'vue-router'

const route = useRouter()
</script>

<style scoped>
.logo {
  background: url("./public/logo.png") 90% no-repeat;
}
</style>