import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { reads } from '@ember-decorators/object/computed';

export default Component.extend({
  store: service(),

  @reads('store') storeAlias: null
});
