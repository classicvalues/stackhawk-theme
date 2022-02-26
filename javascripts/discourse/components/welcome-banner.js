import Component from '@ember/component';
import { inject as service } from '@ember/service';
import discourseComputed from 'discourse-common/utils/decorators';
import { defaultHomepage } from 'discourse/lib/utilities';
import I18n from 'I18n';

export default Component.extend({
  router: service(),
  tagName: 'section',

  didInsertElement() {
    this._super(...arguments);
    const title = I18n.t(themePrefix('welcome_banner.title'));
    const titleStart = title.substring(0, title.lastIndexOf(' '));
    const titleEnd = title.split(' ').pop();

    this.set('bannerTitleStart', titleStart);
    this.set('bannerTitleEnd', titleEnd);
  },

  @discourseComputed('router.currentRouteName')
  canDisplay(currentRouteName) {
    if (currentRouteName === `discovery.${defaultHomepage()}`) {
      return true;
    } else if (
      this.siteSettings.top_menu
        .split('|')
        .any((m) => `discovery.${m}` === currentRouteName)
    ) {
      return true;
    } else {
      return false;
    }
  },
});
