<template>
  <div class='w-full h-full flex flex-col px-14 py-10'>
    <div class='flex flex-col justify-center gap-4'>
      <div class="border-solid border-sky-400 border">
        <div v-html="event.description" class="p-4"></div>
      </div>
      <div>
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="Для участников" name="first">
            <div v-html="event.infoForParticipant"></div>
            <div><el-button plain @click="() => console.log(route.currentRoute)">Участвовать</el-button></div>
          </el-tab-pane>
          <el-tab-pane label="Для посетителей" name="second">
            <div v-html="event.infoForVisitor"></div>
          </el-tab-pane>
          <el-tab-pane label="Для партнеров" name="third">
            <div v-html="event.infoForPartner"></div>
          </el-tab-pane>
      </el-tabs>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, onMounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import Editor from 'primevue/editor';
import { useRouter } from 'vue-router'
import { typeEvent } from '../../helpers/typeEventEnum.js'
import { useStore } from 'vuex';

const route = useRouter()
const store = useStore()

const event = computed(() => store.getters.getCurrentEvent)
const activeName = ref('first')
onMounted(() => {
  store.dispatch('setCurrentEventApi')
})
</script>

<style scoped>

</style>