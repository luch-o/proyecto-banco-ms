import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import User from './components/User'
import UserAuth from './components/UserAuth'
import Account from './components/Account'
import Historial from './components/Historial'
import Transaction from './components/Transaction'

const routes = [{
    path: '/',
    name: 'root',
    component: App
},
{
    path: '/user/auth',
    name: "user_auth",
    component: UserAuth
},
{
    path: '/user/:username',
    name: "user",
    component: User
},
{
    path: '/user/:username',
    name: "account",
    component: Account
},
{
    path: '/user/:username',
    name: "historial",
    component: Historial
},
{
    path: '/user/:username',
    name: "transaction",
    component: Transaction
}

]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router