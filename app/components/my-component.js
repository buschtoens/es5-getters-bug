import Component from '@ember/component';
import { inject as service } from '@ember/service';
// import { service } from '@ember-decorators/service';
import { reads } from '@ember-decorators/object/computed';

export default Component.extend({
  // @service store: null
  store: service(),

  @reads('store') storeAlias: null
});
