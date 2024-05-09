<template>
    <div class='w-full h-full flex flex-col'>
      <div>Форма для создания мероприятия! Заполните всю основную информацию о создаваемом мероприятии, после отправки формы, в личном кабинете можно дополнить информацию!</div>
      <div class=' max-w-3xl min-w-60 p-4'>
        <el-form :model='form' label-width='auto' ref='ruleFormRef' label-position="top">
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
                <Editor v-model="test" :value="test" editorStyle="height: 220px" />
            </el-form-item>
            <div class="flex gap-3">
                <el-form-item
                prop='dateBegin'
                label='Начало проведения'>
                <el-date-picker
                v-model='form.dateBegin'
                type="datetime"
                style='width: 100%'
                />
            </el-form-item>
            <el-form-item
                prop='dateEnd'
                label='Окончание проведения'>
                <el-date-picker
                v-model='form.dateEnd'
                type="datetime"
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
            <el-form-item
                prop='description'
                label='Описание'>
                <Editor v-model="form.infoForParticipant" editorStyle="height: 220px" />
            </el-form-item>
            <el-form-item
                prop='description'
                label='Описание'>
                <Editor v-model="form.infoForVisitor" editorStyle="height: 220px" />
            </el-form-item>  
            <el-form-item
                prop='description'
                label='Описание'>
                <Editor v-model="form.infoForPartner" editorStyle="height: 220px" />
            </el-form-item>
            <el-form-item>
                <el-button type='default' @click='submitForm(ruleFormRef)'>Изменить основную информацию</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-tooltip
                class="box-item"
                effect="dark"
                content="да пизда"
                placement="right"
            >
                Добавить форму для заявки участника
            </el-tooltip>
        </div>
        <FormRequests @add-form-request="addFormRequest"></FormRequests> 
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, reactive, ref, watch } from 'vue'
  import Editor from 'primevue/editor';
  import { useRouter } from 'vue-router'
  import { useStore} from "vuex";
  import { typeEvent } from '../../helpers/typeEventEnum.js'
  import EventService from '../../services/event.service'
  import FormRequests from '@/components/FormRequests.vue'
  
  const test = ref("<p>Балалала</p>")
  const store = useStore()


  const event = computed(() => store.getters.getCurrentEvent)

  const form = ref(event.value)
  
  const route = useRouter()
  
  const submitForm = () => {
    
  }
  const addFormRequest = (formRequest) => {
    console.log(formRequest)
  }
  onMounted(() => {
    store.dispatch('setCurrentEventApi')
  })
  
  </script>
  
  <style scoped>
  </style>