<template>
  <el-dropdown class='h-full'>
    <span class="el-dropdown-link flex items-center w-full">
      <img class="w-14 h-full profile-icon" src='../../../public/icon/profile.png'/>
      <p>{{ curUser.nickname }}</p>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Мой профиль</el-dropdown-item>
        <el-dropdown-item>Мои мероприятия</el-dropdown-item>
        <el-dropdown-item>Мои заявки</el-dropdown-item>
        <el-dropdown-item>Выйти</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useStore } from 'vuex'
import {computed} from "vue";

const store = useStore()

const curUser = computed(() => store.getters["auth/getUser"])
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.profile-icon {
  width: 20px;
  height: 20px;
}
</style>
