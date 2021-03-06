import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('list', params.list_id);
  },
  actions: {
    didTransition() {
      this.controller.set('itemId', null);
    }
  }
});
