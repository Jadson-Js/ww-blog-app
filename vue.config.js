const { join } = require('path');
const PrerenderPlugin = require('prerender-spa-plugin-next');

const plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.unshift(
    new PrerenderPlugin({
      staticDir: join(__dirname, 'dist'),
      routes: ['/', '/:category', '/:category/noticia/:noticeId/:noticeTitle', '/login', '/perfil', '/perfil/noticiar', '/perfil/nova/categoria', '/perfil/editar/noticia/:noticeId/:noticeTitle', '/perfil/editar/categoria/:categoryId/:categoryTitle', '/:pathMatch(.*)*'], //the page route you want to prerender
    }
  ));
}

module.exports = {
  transpileDependencies: true,
  configureWebpack(config) {
      config.plugins = [...config.plugins, ...plugins];
  },
};