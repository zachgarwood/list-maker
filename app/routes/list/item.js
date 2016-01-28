import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('item', params.item_id);
  },
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('currentlyEditing', true);
    controller.set('highlight', 'highlight');
  },
  actions: {
    didTransition() {
      this.controllerFor('list').set('itemId', this.currentModel.get('id'));
    }
  }
});
