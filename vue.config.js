const plugins = [];

if (process.env.NODE_ENV === 'production') {
  const { join } = require('path');
  const PrerenderPlugin = require('prerender-spa-plugin-next');

  plugins.unshift(
    new PrerenderPlugin({
      staticDir: join(__dirname, 'dist'),
      routes: ['/', '/:category', '/:category/noticia/:noticeId/:noticeTitle', '/user/login', '/user/perfil', '/perfil/noticiar', '/perfil/edit/noticia/:noticeId/:noticeTitle', '/perfil/edit/categoria/:categoryId/:categoryTitle', '/:pathMatch(.*)*'], //the page route you want to prerender
    })
  );
}