<template>
  <div class='w-full h-full flex justify-center'>
    <div class=' max-w-3xl min-w-60 p-4'>
      <el-form :model='form' label-width='auto' ref='ruleFormRef' :rules='rules'>
        <el-form-item prop='username' label='Login'>
          <el-input v-model='form.username' />
        </el-form-item>
        <el-form-item prop='password' label='Пароль'>
          <el-input v-model='form.password' type='password' />
        </el-form-item>
        <el-form-item>
          <el-button type='default' @click='submitForm(ruleFormRef)'>Войти</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref, computed, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

interface RuleForm {
  username: String,
  password: String,
}

const ruleFormRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  username: '',
  password: ''
})
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: 'Обязательное поле!' }],
  password: [{ required: true, message: 'Обязательное поле!' }]
})

const store = useStore()
const route = useRouter()
const loggedIn = computed(() => store.getters['auth/getLoggedIn'])

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (!valid) return
    store.dispatch('auth/login', form)
    .then(
      () => {
        route.push("/")
      },
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