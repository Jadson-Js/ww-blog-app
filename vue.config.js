const { join } = require('path');
const PrerenderPlugin = require('prerender-spa-plugin-next');
const SitemapPlugin = require('sitemap-webpack-plugin').default

const plugins = [];
const paths = [
  {
      path: '/',
      lastmod: '2022-08-14',
      priority: 1.0,
      changefreq: 'weekly'
  },
  {
      path: '/:category/',
      lastmod: '2022-08-14',
      priority: 0.8,
      changefreq: 'weekly'
  },
  {
      path: '/:category/noticia/:noticeId/:noticeTitle/',
      lastmod: '2022-08-14',
      priority: 0.9,
      changefreq: 'weekly'
  },
  {
      path: '/user/login/',
      lastmod: '2022-08-14',
      priority: 0.1,
      changefreq: 'monthly'
  },
  {
      path: '/user/perfil/',
      lastmod: '2022-08-14',
      priority: 0.4,
      changefreq: 'weekly'
  },
  {
      path: '/perfil/noticiar/',
      lastmod: '2022-08-14',
      priority: 0.1,
      changefreq: 'monthly'
  }
  ,
  {
      path: '/perfil/edit/noticia/:noticeId/:noticeTitle/',
      lastmod: '2022-08-14',
      priority: 0.1,
      changefreq: 'monthly'
  },
  {
      path: '/perfil/edit/categoria/:categoryId/:categoryTitle/',
      lastmod: '2022-08-14',
      priority: 0.1,
      changefreq: 'monthly'
  },
  {
      path: '/:pathMatch(.*)*/',
      lastmod: '2022-08-14',
      priority: 0.1,
      changefreq: 'never'
  }
]


if (process.env.NODE_ENV === 'production') {
  plugins.unshift(
    new PrerenderPlugin({
      staticDir: join(__dirname, 'dist'),
      routes: ['/', '/:category', '/:category/noticia/:noticeId/:noticeTitle', '/user/login', '/user/perfil', '/perfil/noticiar', '/perfil/edit/noticia/:noticeId/:noticeTitle', '/perfil/edit/categoria/:categoryId/:categoryTitle', '/:pathMatch(.*)*'], //the page route you want to prerender
    },
    new SitemapPlugin({ 
      base: 'https://mefala.000webhostapp.com',
      paths,
      options: {
        filename: 'map.xml',
        lastmod: true,
        changefreq: 'monthly',
        priority: 0.4
      }
    })
  ));
}

module.exports = {
  transpileDependencies: true,
  configureWebpack(config) {
      config.plugins = [...config.plugins, ...plugins];
  },
};