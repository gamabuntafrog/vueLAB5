import { createRouter, createWebHistory } from 'vue-router'
import LessonsView from '@/views/LessonsView.vue'
import TeacherView from '@/views/TeacherView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import store from '@/store/index.js'

const routes = [
    {
        path: '/home',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
    },
    {
        path: '/login',
        name: 'loginPage',
        component: () => import('../views/LoginView.vue'),
        meta: {
            forLoggedIn: false,
        },
    },
    {
        path: '/summary/:lessonTeacherPairs',
        name: 'summary',
        component: () => import('../views/SummaryView.vue'),
        meta: {
            forLoggedIn: true,
        },
    },

    {
        path: '/lessons',
        name: 'lessons',
        component: LessonsView,
        children: [
            {
                path: '/lessons/select',
                name: 'select',
                component: LessonsView,
            },
        ],
        meta: {
            forLoggedIn: true,
        },
    },
    {
        path: '/teacher',
        name: 'teacher',
        component: TeacherView,
        props: (route) => ({ lessonIds: route.query.lessonIds }),
        meta: {
            forLoggedIn: true,
        },
        beforeEnter: (to, from, next) => {
            console.log(from, to)
            if (from.name === 'select' && to.query.lessonIds) {
                next()
            } else {
                next('/teacher')
            }
        },
    },
    {
        path: '/page-not-found',
        name: 'PageNotFound',
        component: PageNotFound,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/page-not-found',
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // encodeQuery: false,
    // encodeParams: false,
})

router.beforeEach((to, from, next) => {
    const nextRouteIsForLoggedIn = to.meta?.forLoggedIn

    if (!('forLoggedIn' in to.meta)) {
        next()
    }

    if (nextRouteIsForLoggedIn && !store.state.user.isLoggedIn) {
        next('/login')
    } else if (!nextRouteIsForLoggedIn && store.state.user.isLoggedIn) {
        next('/home')
    } else {
        next()
    }
})

export default router
