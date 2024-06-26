import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateEvent from '../views/event/CreateEvent.vue'
import RegistrationView from '../views/auth/RegistrationView.vue'
import LoginView from '../views/auth/LoginView.vue'
import PageEvent from '../views/event/PageEvent.vue'
import EditEvent from '@/views/event/EditEvent.vue'
import EventView from '@/views/EventView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-event',
      name: 'create-event',
      component: CreateEvent
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView,
      children: [
        {
          path: 'domen=:domen/edit',
          name: 'event-edit',
          component: EditEvent,
        },
        {
          path: 'domen=:domen',
          name: 'event',
          component: PageEvent
        }
      ]
    },
  
  ]
})

export default router
