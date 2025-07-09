import { createRouter,createWebHistory } from 'vue-router'
import ClientLayout from '../components/layouts/ClientLayout.vue'


const routes = [
    {
        path: '/',
        component: ClientLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router