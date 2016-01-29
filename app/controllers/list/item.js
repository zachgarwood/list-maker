import Ember from 'ember';

export default Ember.Controller.extend({
  listController: Ember.inject.controller('list'),
  actions : {
    delete() {
      this.get('model').destroyRecord();
      this.transitionToRoute('list');
    },
    update() {
      this.get('model').save();
      this.toggleProperty('currentlyEditing');
    },
    toggleEdit() {
      this.get('model').rollbackAttributes();
      this.toggleProperty('currentlyEditing');
    }
  },
  currentlyEditing: false,
  ableToEdit: Ember.computed('currentlyEditing', 'belongsToUser', function() {
    return this.get('currentlyEditing') && this.get('belongsToUser');
  }),
  belongsToUser: Ember.computed('model.user.id', 'session.uid', function() {
    return this.get('model.user.id') === this.get('session.uid');
  }),
  gifV: Ember.computed('model.image', function() {
    let imageParts = this.get('model.image').split('.');
    let fileType = imageParts.pop();
    if (fileType.toLowerCase() === 'gifv') {
      imageParts.push('webm');
      return imageParts.join('.');
    } else {
      return false;
    }
  })
});
