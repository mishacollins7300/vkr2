<template>
  <div class='w-full h-full flex flex-col'>
    <div>Форма для создания мероприятия! Заполните всю основную информацию о создаваемом мероприятии, после отправки формы, в личном кабинете можно дополнить информацию!</div>
    <div class=' max-w-3xl min-w-60 p-4'>
      <el-form :model='form' label-width='auto' ref='ruleFormRef' :rules='rules'>
        <div class="flex gap-3">
            <el-form-item
                prop='name'
                label='Название ивента'>
                <el-input v-model='form.name' />
            </el-form-item>
            <el-form-item
                prop='type'
                label='Тип ивента'>
                    <el-select
                    v-model="form.type"
                    style="width: 240px"
                    >
                    <el-option
                        v-for="item in typeEvent"
                        :key="item.value"
                        :label="item.value"
                        :value="item.value"
                    />
                    </el-select>
            </el-form-item>
        </div>  
        <el-form-item
            prop='description'
            label='Описание'>
            <Editor v-model="form.description" editorStyle="height: 220px" />
        </el-form-item>
        <div class="flex gap-3">
            <el-form-item
            prop='dateBegin'
            label='Начало проведения'>
            <el-date-picker
              v-model='form.dateBegin'
              type='date'
              style='width: 100%'
            />
          </el-form-item>
          <el-form-item
            prop='dateEnd'
            label='Окончание проведения'>
            <el-date-picker
              v-model='form.dateEnd'
              type='date'
              style='width: 100%'
            />
          </el-form-item>
        </div>
        <div class="flex gap-3">
            <el-form-item prop='domen' label='Название на английском'>
                <el-input v-model='form.domen' />
            </el-form-item>
            <el-form-item prop='city' label='Город'>
                <el-input v-model='form.city'/>
            </el-form-item>
        </div> 
        <el-form-item>
          <el-button type='default' @click='submitForm(ruleFormRef)'>Добавить мероприятие</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, onMounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import Editor from 'primevue/editor';
import { useRouter } from 'vue-router'
import { useStore} from "vuex";
import { typeEvent } from '../../helpers/typeEventEnum.js'
import EventService from '../../services/event.service'

interface RuleForm {
  name: String,
  type: String,
  description: String,
  dateBegin: String,
  dateEnd: String,
  domen: String,
  city: String
}
const store = useStore()

const ruleFormRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  name: '',
  type: '',
  description: '',
  dateBegin: '',
  dateEnd: '',
  domen: '',
  city: ''
})
const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: 'Обязательное поле!' }],
  type: [{ required: true, message: 'Обязательное поле!' }],
  description: [{ required: true, message: 'Обязательное поле!' }],
  dateBegin: [{ required: true, message: 'Обязательное поле!' }],
  dateEnd: [{ required: true, message: 'Обязательное поле!' }],
  domen: [{ required: true, message: 'Обязательное поле!' }],
  city: [{ required: true, message: 'Обязательное поле!' }]
})

const route = useRouter()

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (!valid) return
    const event = {
      ...form,
      user_id: store.getters["auth/getUser"].id
    }
    EventService.createEvent(event).then(
        response => {
          route.push({ path: '/event', query: { domen: response.data.domen } })
        },
        error => {
          console.log(error)
        }
    )
  })
}

</script>

<style scoped>

</style>