<template>
  <div class='w-full h-full flex justify-center flex-col mt-6'>
    <div class=' max-w-3xl min-w-60'>
      <el-form
        :model='form'
        label-width='auto'
        ref='ruleFormRef'
        :rules='rules'
        class="demo-form-inline"
      >
        <el-form-item
          :inline='true'
          prop='name'
          label='Название ивента'>
          <el-input v-model='form.name' />
        </el-form-item>
        <el-form-item
          prop='type'
          label='Тип ивента'>
          <el-select
            v-model="form.type"
          >
            <el-option
              v-for="item in typeEvent"
              :key="item.value"
              :label="item.value"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          prop='description'
          label='Описание'>
          <Editor v-model="form.description" editorStyle="height: 320px" />
        </el-form-item>
        <el-form-item
          prop='dateBegin'
          label='Начало проведения'>
          <el-date-picker
            v-model='form.dateBegin'
            type='date'
          />
        </el-form-item>
        <el-form-item
          prop='dateEnd'
          label='Окончание проведения'>
          <el-date-picker
            v-model='form.dateEnd'
            type='date'
          />
        </el-form-item>
        <el-form-item prop='domen' label='Название на английском'>
          <el-input v-model='form.domen' />
        </el-form-item>
        <el-form-item prop='city' label='Город'>
          <el-input v-model='form.city'/>
        </el-form-item>
        <el-form-item>
          <el-button type='default' @click='submitForm(ruleFormRef)'>Сохранить</el-button>
        </el-form-item>
      </el-form>
      <div>
        Добавление дополнительной информации
        <div>Добавить номинацию</div>
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

interface RuleForm {
  name: String,
  type: String,
  description: String,
  dateBegin: String,
  dateEnd: String,
  domen: String,
  city: String
}

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
    route.push('/profile')
  })
}

</script>

<style scoped>

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

</style>