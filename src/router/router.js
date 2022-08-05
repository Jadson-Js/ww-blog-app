// IMPORTS TO SETUP OF STORE
import {
    createRouter,
    createWebHistory
} from 'vue-router'
import store from '../store/store'

// IMPORTS OF COMPONENTS
// Header 
const AppHeaderSlide = () => import('../components/Slide/header/AppHeaderSlide.vue')
const AppHeaderCategoryTitle = () => import('../components/Category/header/AppHeaderCategoryTitle.vue')
const AppHeaderNotice = () => import('../components/Notice/header/AppHeaderNotice.vue')

// Main
const AppMainFeed = () => import('../components/Feed/main/AppMainFeed.vue');
const AppMainNotice = () => import('../components/Notice/main/AppMainNotice.vue')
const AppMainLogin = () => import('../components/Login/AppMainLogin.vue')
const AppMainProfile = () => import('../components/Profile/AppMainProfile.vue')
const AppMainReport = () => import('../components/Report/AppMainReport.vue')
const ReportEditCategory = () => import('../components/Report/ReportEditCategory.vue')

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
                main: AppMainFeed
            }
        },
        {
            path: '/:category',
            name: 'category',
            components: {
                header: AppHeaderCategoryTitle,
                main: AppMainFeed
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
            path: '/user/login',
            name: 'login',
            components: {
                main: AppMainLogin
            }
        },
        {
            path: '/user/perfil',
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
            path: '/perfil/edit/noticia/:noticeId/:noticeTitle',
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
            path: '/perfil/edit/categoria/:categoryId/:categoryTitle',
            name: 'editCategory',
            components: {
                main: ReportEditCategory
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