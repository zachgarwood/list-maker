import Ember from 'ember';

export default Ember.Controller.extend({
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
    },
    toggleStar() {
      this.toggleProperty('savingStar');
      let controller = this;
      controller.store.find(
        'user',
        controller.get('session.uid')
      ).then((user) => {
        let item = controller.get('model');
        if (controller.get('starred')) {
          this.get('star').destroyRecord();
          this.toggleProperty('savingStar');
        } else {
          let star = controller.store.createRecord('star', { user: user, item: item, });
          star.save().then((star) => {
            user.get('stars').addObject(star);
            user.save();
            item.get('stars').addObject(star);
            item.save();
            this.toggleProperty('savingStar');
          });
        }
      });
    },
  },
  starred: Ember.computed('model.stars.[]', function() {
    let controller = this;
    return this.get('model.stars').any(function(star) {
      if (star.get('user.id') === controller.get('session.uid')) {
        controller.set('star', star);
        return true;
      }
      return false;
    });
  }),
  star: null,
  savingStar: false,
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
