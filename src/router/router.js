// IMPORTS TO SETUP OF STORE
import {
    createRouter,
    createWebHistory
} from 'vue-router'
import store from '../store/store'

// IMPORTS OF COMPONENTS
// Header 
const AppHeaderSlide = () => import('../components/Header/Slide/AppHeaderSlide.vue')
const AppHeaderCategory = () => import('../components/Header/Category/AppHeaderCategory.vue')
const AppHeaderNotice = () => import('../components/Header/Notice/AppHeaderNotice.vue')

// Main
const AppMainHomeContent = () => import('../components/Main/Home/AppMainHome.vue');
const AppMainNotice = () => import('../components/Main/Notice/AppMainNotice.vue')
const AppMainLogin = () => import('../components/Main/Login/AppMainLogin.vue')
const AppMainProfile = () => import('../components/Main/Profile/AppMainProfile.vue')
const AppMainReport = () => import('../components/Main/Report/AppMainReport.vue')

// Errors
const AppNotFound = () => import('../components/AppNotFound.vue');


// CREATE THE ROUTER
const router = createRouter({
    // TYPE OF HISTORY
    history: createWebHistory(),

    // ROUTES
    routes: [{
            path: '/',
            name: 'home',
            components: {
                header: AppHeaderSlide,
                main: AppMainHomeContent
            }
        },
        {
            path: '/:category',
            name: 'category',
            components: {
                header: AppHeaderCategory,
                main: AppMainHomeContent
            }
        },
        {
            path: '/:category/noticia/:noticeId/:noticeTitle',
            name: 'notice',
            components: {
                header: AppHeaderNotice,
                main: AppMainNotice
            }
        },
        {
            path: '/login',
            name: 'login',
            components: {
                main: AppMainLogin
            }
        },
        {
            path: '/perfil',
            name: 'profile',
            components: {
                main: AppMainProfile
            },
            beforeEnter: (to, from, next) => {
                if(store.getters.GET_IS_LOGGED) {
                    next()
                } else {
                    next('/')
                }
        
                
            } 
        },
        {
            path: '/perfil/noticiar',
            name: 'report',
            components: {
                main: AppMainReport
            },
            beforeEnter: (to, from, next) => {
                if(store.getters.GET_IS_LOGGED) {
                    next()
                } else {
                    next('/')
                }
        
                
            } 
        },
        {
            path: '/perfil/edit/noticia/:noticeId',
            name: 'editReport',
            components: {
                main: AppMainReport
            },
            beforeEnter: (to, from, next) => {
                if(store.getters.GET_IS_LOGGED) {
                    next()
                } else {
                    next('/')
                }
        
                
            } 
        },
        {
            path: '/:pathMatch(.*)*', // Indica todas possiveis rotas / caso nenhuma de sua rota for chamada essa será chamada
            name: 'error',
            components: {
                main: AppNotFound
            }
        }
    ]
})



export default router