<template>
  <div>
    <div>
        <span>Название формы</span>
        <el-input v-model='form.name'/>
    </div>
    <div class="flex flex-col">
        <span>Дата и время окончания принятия заявок</span>
        <el-date-picker
          v-model="form.dateEnd"
          type="datetime"
        />
    </div>
    <div v-for='(field, index) in reqFields' class="flex gap-4">
      <div>
        <span>Название поля</span>
        <el-input v-model='field.label'/>
      </div>
      <div>
        <span>Тип поля</span>
        <el-select
          v-model="field.type"
        >
          <el-option
            label="Текст"
            value="text"
          />
          <el-option
            label="textarea"
            value="Увеличенное поле текста"
          />
          <el-option
            label="time"
            value="Время"
          />
        </el-select>
      </div>
      <div>
        <span>Подсказка</span>
        <el-input v-model='field.tooltip'/>
      </div>
      <el-button type="danger" :icon="Delete" circle @click="deleteFiled(index)"/>
    </div>
    <el-button type="success" :icon="Plus" circle @click="addFiled"/>
    <el-button type="success"  @click="addFormRequest">Добавить форму</el-button>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import Editor from 'primevue/editor';
import { useRouter } from 'vue-router'
import {
  Delete,
  Plus
} from '@element-plus/icons-vue'

const emits = defineEmits(['addFormRequest'])

const addFormRequest = () => {
  emits('addFormRequest', form)
}
const reqFields = ref([{label: '', type: 'text', tooltip: ''}])
const form = reactive({
  name: '',
  description: '',
  fields: reqFields,
  dateEnd: ''
})

const addFiled = () => {
  reqFields.value.push({label: '', type: 'text', tooltip: ''})
}

const deleteFiled = (index) => {
  reqFields.value.splice(index, 1)
}
</script>

<style scoped>

</style>