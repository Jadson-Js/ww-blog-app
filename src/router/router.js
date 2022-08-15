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
            },
            meta: {
                title: 'Hello world :)',
                metaTags: [
                  {
                    name: 'description',
                    content: 'The home page of our example app.'
                  },
                  {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                  }
                ]
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

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  
    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
    }
  
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  
    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();
  
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');
  
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
  
      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');
  
      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));
  
    next();
  });

export default router