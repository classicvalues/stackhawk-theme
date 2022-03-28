import { getOwner } from 'discourse-common/lib/get-owner';
import { apiInitializer } from 'discourse/lib/api';
import { h } from 'virtual-dom';

export default apiInitializer('0.11.1', (api) => {
  // Replace Icons:
  api.replaceIcon('bars', 'sh-bars');
  api.replaceIcon('bell', 'sh-bell');
  api.replaceIcon('caret-down', 'sh-caret-down');
  api.replaceIcon('check-square', 'sh-check-square');
  api.replaceIcon('check', 'sh-check');
  api.replaceIcon('chevron-down', 'sh-chevron-down');
  api.replaceIcon('chevron-left', 'sh-chevron-left');
  api.replaceIcon('chevron-right', 'sh-chevron-right');
  api.replaceIcon('chevron-up', 'sh-chevron-up');
  api.replaceIcon('comment-lines', 'sh-comment-lines');
  api.replaceIcon('exclamation-square', 'sh-exclamation-square');
  api.replaceIcon('heart', 'sh-heart');
  api.replaceIcon('link', 'sh-link');
  api.replaceIcon('lock', 'sh-lock');
  api.replaceIcon('pencil', 'sh-pencil');
  api.replaceIcon('search', 'sh-search');
  api.replaceIcon('shield-alt', 'sh-shield-alt');
  api.replaceIcon('thumbtack', 'sh-thumbtack');
  api.replaceIcon('user', 'sh-user');
  api.replaceIcon('reply', 'sh-reply');

  api.decorateWidget('category-header-widget:after', () => {
    const router = getOwner(this).lookup('router:main');
    const route = router.currentRoute;

    if (route.name === 'discovery.category') {
      return h('img', {
        attributes: {
          src: settings.theme_uploads.welcome_banner_artifact,
        },
      });
    }
  });

  api.onPageChange(() => {
    const outlet = document.querySelector('#main-outlet');
    const root = document.documentElement;

    root.style.setProperty('--outlet-left-offset', `${outlet.offsetLeft}px`);

    window.onresize = () => {
      root.style.setProperty('--outlet-left-offset', `${outlet.offsetLeft}px`);
    };
  });
});
