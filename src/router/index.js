import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/menu/RISForm',
                    name: 'RISForm',
                    component: () => import('@/views/menu/RISForm.vue')
                },
                {
                    path: '/menu/input',
                    name: 'input',
                    component: () => import('@/views/menu/InputDoc.vue')
                },
                {
                    path: '/menu/button',
                    name: 'button',
                    component: () => import('@/views/menu/ButtonDoc.vue')
                },
                {
                    path: '/menu/bloodrequests',
                    name: 'table',
                    component: () => import('@/views/menu/TableDoc.vue')
                },
                {
                    path: '/menu/list',
                    name: 'list',
                    component: () => import('@/views/menu/ListDoc.vue')
                },
                {
                    path: '/menu/tree',
                    name: 'tree',
                    component: () => import('@/views/menu/TreeDoc.vue')
                },
                {
                    path: '/menu/panel',
                    name: 'panel',
                    component: () => import('@/views/menu/PanelsDoc.vue')
                },

                {
                    path: '/menu/overlay',
                    name: 'overlay',
                    component: () => import('@/views/menu/OverlayDoc.vue')
                },
                {
                    path: '/menu/media',
                    name: 'media',
                    component: () => import('@/views/menu/MediaDoc.vue')
                },
                {
                    path: '/menu/message',
                    name: 'message',
                    component: () => import('@/views/menu/MessagesDoc.vue')
                },
                {
                    path: '/menu/file',
                    name: 'file',
                    component: () => import('@/views/menu/FileDoc.vue')
                },
                {
                    path: '/menu/menu',
                    name: 'menu',
                    component: () => import('@/views/menu/MenuDoc.vue')
                },
                {
                    path: '/menu/charts',
                    name: 'charts',
                    component: () => import('@/views/menu/ChartDoc.vue')
                },
                {
                    path: '/menu/misc',
                    name: 'misc',
                    component: () => import('@/views/menu/MiscDoc.vue')
                },
                {
                    path: '/menu/timeline',
                    name: 'timeline',
                    component: () => import('@/views/menu/TimelineDoc.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/pages/Documentation.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
