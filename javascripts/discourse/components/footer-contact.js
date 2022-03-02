import Component from '@ember/component';
import discourseComputed from 'discourse-common/utils/decorators';

export default Component.extend({
  tagName: 'li',
  classNames: ['footer-section-link-wrapper'],

  @discourseComputed('section.text')
  canDisplay(title) {
    if (title === 'Get In Touch') {
      return true;
    } else {
      return false;
    }
  },
});
