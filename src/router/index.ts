import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import config from './config';

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('../views/Home.vue')
        },
        ...config
    ]
});

export default router;
