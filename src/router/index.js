import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/RegisterUser.vue')
  },
  {
    path: '/registerpatient',
    name: 'registerpatient',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/RegisterPatient.vue')
  },
  {
    path: '/diagnosis',
    name: 'diagnosis',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/DoctorDiagnosis.vue')
  },
  {
    path: '/appoitmentR',
    name: 'readappoitment',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/ReadAppoitment.vue')
  },
  {
    path: '/appoitment',
    name: 'appoitment',
    component: () =>
      import(
        /* webpackChunkName: "register" */ '../views/CreateAppoitment.vue'
      )
  },
  {
    path: '/Role_Service',
    name: 'Role_service',
    component: () =>
      import(
        /* webpackChunkName: "register" */ '../views/ManageRoleService.vue'
      )
  },
  {
    path: '/addrole',
    name: 'addrole',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/AddRole.vue')
  },
  {
    path: '/addservice',
    name: 'addservice',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/AddService.vue')
  },
  {
    path: '/viewroles',
    name: 'viewroles',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/ViewRoles.vue')
  },
  {
    path: '/medtest',
    name: 'medicaltest',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/MedicalTest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
