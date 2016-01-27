import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    delete() {
      this.get('model').destroyRecord();
      this.transitionToRoute('lists');
    },
    update(param, event, callback) {
      return callback(this.get('model').save());
    }
  },
  belongsToUser: Ember.computed('model.user.id', 'session.currentUser.id', function() {
    return this.get('model.user.id') === this.get('session.currentUser.id');
  })
});
