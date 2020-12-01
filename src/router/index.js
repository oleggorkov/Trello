import Vue from 'vue'
import VueRouter from 'vue-router'
import Trello from '../pages/Trello/Trello.vue'
import MyBoard from '../pages/MyBoard/MyBoard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'trello',
        component: Trello
    },
    {
        path: '/boards/my_board',
        name: 'my_board',
        component: MyBoard
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
