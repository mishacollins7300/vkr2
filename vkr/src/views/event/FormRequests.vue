<template>
  <div>
    <div v-for='field in reqFields'>
      <el-input v-model='field.label'/>
      <el-select
        v-model="field.type"
      >
        <el-option
          label="Текст"
          value="text"
        />
        <el-option
          label=""
          value=""
        />
      </el-select>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'
import Editor from 'primevue/editor';
import { useRouter } from 'vue-router'

const reqFields = ref([{label: '', type: 'text'}])
const form = {
  name: '',
  description: '',
  fields: reqFields
}
</script>

<style scoped>

</style>