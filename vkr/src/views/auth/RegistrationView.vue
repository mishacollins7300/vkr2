<template>
  <div class='w-full h-full flex justify-center'>
    <div class=' max-w-3xl min-w-60 p-4'>
      <el-form :model='form' label-width='auto' ref='ruleFormRef' :rules='rules'>
        <el-form-item
          prop='familiya'
          label='Фамилия'>
          <el-input v-model='form.familiya' />
        </el-form-item>
        <el-form-item
          prop='imya'
          label='Имя'>
          <el-input v-model='form.imya' />
        </el-form-item>
        <el-form-item label='Отчество'>
          <el-input v-model='form.otchestvo' />
        </el-form-item>
        <el-form-item
          prop='nickname'
          label='Отображаемое имя'>
          <el-input v-model='form.nickname' />
        </el-form-item>
        <el-form-item
          prop='dataRogdeniya'
          label='Дата рождения'>
          <el-date-picker
            v-model='form.dataRogdeniya'
            type='date'
            style='width: 100%'
          />
        </el-form-item>
        <el-form-item prop='phone' label='Телефон'>
          <el-input v-model='form.phone' />
        </el-form-item>
        <el-form-item prop='email' label='Email'>
          <el-input v-model='form.email' type='email' />
        </el-form-item>
        <el-form-item prop='username' label='Login'>
          <el-input v-model='form.username' />
        </el-form-item>
        <el-form-item prop='password' label='Пароль'>
          <el-input v-model='form.password' type='password' />
        </el-form-item>
        <el-form-item>
          <el-button type='default' @click='submitForm(ruleFormRef)'>Зарегистрироваться</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, onMounted, reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

interface RuleForm {
  familiya: String,
  imya: String,
  otchestvo: String,
  dataRogdeniya: String,
  phone: Number,
  email: String,
  username: String,
  password: String,
  nickname: String
}

const ruleFormRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  familiya: '',
  imya: '',
  otchestvo: '',
  dataRogdeniya: '',
  phone: null,
  email: '',
  username: '',
  password: '',
  nickname: ''
})
const rules = reactive<FormRules<RuleForm>>({
  familiya: [{ required: true, message: 'Обязательное поле!' }],
  imya: [{ required: true, message: 'Обязательное поле!' }],
  otchestvo: [],
  dataRogdeniya: [{ required: true, message: 'Обязательное поле!' }],
  phone: [
    { required: true, message: 'Обязательное поле!' },
    { min: 11, max: 11, message: 'В поле должно быть 11 чисел!' }
  ],
  email: [
    {
      required: true,
      message: 'Обязательное поле!',
    },
    {
      type: 'email',
      message: 'Неправильный формат!',
    },
  ],
  username: [{ required: true, message: 'Обязательное поле!' }],
  password: [{ required: true, message: 'Обязательное поле!' }],
  nickname: [{ required: true, message: 'Обязательное поле!' }]
})

const store = useStore()
const route = useRouter()
const loggedIn = computed(() => store.getters['auth/getLoggedIn'])
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (!valid) return
    store.dispatch('auth/register', form)
      .then(
        () => route.push("/"),
        (error) => {
          console.log(error)
        }
      )
  })
}

onMounted(() => {
  if (loggedIn.value) {
    route.push("/")
  }
})
</script>

<style scoped>

</style>