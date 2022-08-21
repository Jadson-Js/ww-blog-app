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
const AppMainReportNotice = () => import('../components/Report/Notice/AppMainReport.vue')
const ReportNewCategory = () => import('../components/Report/Category/ReportNewCategory.vue')
const ReportEditCategory = () => import('../components/Report/Category/ReportEditCategory.vue')

// Errors
const AppNotFound = () => import('../components/AppNotFound.vue');

// Guards Navigations

function verifyLogged(to, from, next) {
    if (store.getters.GET_IS_LOGGED) {
        next()
    } else {
        next('/')
    }
}


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
            beforeEnter: (async () => {
                store.commit('SET_RESET')

                await store.dispatch('getCategoriesByApi')

                const config = {
                    limit: 3,
                    offset: 3
                }

                store.dispatch('getNoticesByApiToFeed', config)
            }),
            meta: {
                title: 'mefala.com',
                metaTags: [{
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
            },
            beforeEnter: (async (to) => {
                store.commit('SET_RESET')

                await store.dispatch('getCategoriesByApi')

                const config = {
                    category: to.params.category,
                    limit: 3,
                    offset: 0
                }

                store.dispatch('getNoticesByApiToCategoryFeed', config)

                await store.dispatch('getCategoryByTitle', to.params.category)
            }),
            meta: {
                metaTags: [
                    {
                        name: 'description',
                        content: 'contentDescription'
                    },
                    {
                        property: 'og:description',
                        content: 'contentDescription'
                    },
                    {
                        name: 'keywords',
                        content: 'contentKeywords'
                    },
                    {
                        property: 'og:keywords',
                        content: 'contentKeywords'
                    }
                ]
            }
        },
        {
            path: '/:category/noticia/:noticeId/:noticeTitle',
            name: 'notice',
            components: {
                header: AppHeaderNotice,
                main: AppMainNotice
            },
            beforeEnter: (async (to, from, next) => {
                store.commit('SET_RESET')

                await store.dispatch('getCategoriesByApi')

                await store.dispatch('getNoticesByApiToArticle', to.params.noticeId)

                const config = {
                    category: to.params.category,
                    limit: 3,
                    offset: 0
                }

                store.dispatch('getNoticesByApiToCategoryFeed', config)

                next()
            }),
            meta: {
                metaTags: [
                    {
                        name: 'description',
                        content: 'contentDescription'
                    },
                    {
                        property: 'og:description',
                        content: 'contentDescription'
                    },
                    {
                        name: 'keywords',
                        content: 'contentKeywords'
                    },
                    {
                        property: 'og:keywords',
                        content: 'contentKeywords'
                    }
                ]
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
            beforeEnter: [verifyLogged]
        },
        {
            path: '/perfil/noticiar',
            name: 'newNotice',
            components: {
                main: AppMainReportNotice
            },
            beforeEnter: [verifyLogged]
        },
        {
            path: '/perfil/nova/categoria',
            name: 'newCategory',
            components: {
                main: ReportNewCategory
            },
            beforeEnter: [verifyLogged]
        },
        {
            path: '/perfil/editar/noticia/:noticeId/:noticeTitle',
            name: 'editNotice',
            components: {
                main: AppMainReportNotice
            },
            beforeEnter: [verifyLogged]
        },
        {
            path: '/perfil/editar/categoria/:categoryId/:categoryTitle',
            name: 'editCategory',
            components: {
                main: ReportEditCategory
            },
            beforeEnter: [verifyLogged]
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

// Este retorno de chamada é executado antes de cada mudança de rota, inclusive no carregamento da página.
router.afterEach(async (to, from) => {
    // Isso percorre as rotas correspondentes do último ao primeiro, encontrando a rota mais próxima com um título.
    // por exemplo, se temos `/some/deep/nested/route` e `/some`, `/deep` e `/nested` têm títulos,
    // `/nested`'s serão escolhidos.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Encontra o elemento de rota mais próximo com meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    if (to.name == 'category') {
        document.title = to.params.category
    } else if (to.name == 'notice') {
        document.title = to.params.noticeTitle
    } else {
        // Se uma rota com um título foi encontrada, defina o título do documento (página) para esse valor.
        if (nearestWithTitle) {
            document.title = nearestWithTitle.meta.title;
        } else if (previousNearestWithMeta) {
            document.title = previousNearestWithMeta.meta.title;
        }
    }

    // Remova quaisquer metatags obsoletas do documento usando o atributo key que definimos abaixo.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Ignora metatags de renderização se não houver nenhuma.
    if (!nearestWithMeta) return;

    // Transforma as definições de meta tag em elementos reais na cabeça.
    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');

            if (to.name == 'notice') {
                let { description, keywords } = store.getters.GET_ARTICLE
                
                Object.keys(tagDef).forEach(key => {
                    if (tagDef[key] == 'contentDescriptionn') {
                        tag.setAttribute(key, description)
                    } else if (tagDef[key] == 'contentKeywords') {
                        tag.setAttribute(key, keywords)
                    } else { 
                        tag.setAttribute(key, tagDef[key])
                    }
                });

            } else if (to.name == 'category') {
                let { description, keywords } = store.getters.GET_CATEGORY
                
                Object.keys(tagDef).forEach(key => {
                    if (tagDef[key] == 'contentDescriptionn') {
                        tag.setAttribute(key, description)
                    } else if (tagDef[key] == 'contentKeywords') {
                        tag.setAttribute(key, keywords)
                    } else { 
                        tag.setAttribute(key, tagDef[key])
                    }
                });
            } else { 
                Object.keys(tagDef).forEach(key => {
                    tag.setAttribute(key, tagDef[key]);
                });
            }

            // Usamos isso para rastrear quais meta tags criamos para não interferir em outras.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })

        // Adiciona as meta tags ao cabeçalho do documento.
        .forEach(tag => document.head.appendChild(tag));
});

export default router