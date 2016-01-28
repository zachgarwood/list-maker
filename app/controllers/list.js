import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    delete() {
      this.get('model').destroyRecord();
      this.transitionToRoute('lists');
    },
    update() {
      return this.get('model').save();
    },
    addItem() {
      let controller = this;
      controller.store.find(
        'user',
        controller.get('session.currentUser.id')
      ).then((user) => {
        let list = controller.get('model');
        let item = controller.store.createRecord('item', { user: user, list: list, });
        item.save().then((item) => {
          user.get('items').addObject(item);
          user.save();
          list.get('items').addObject(item);
          list.save();
        });
        controller.transitionToRoute('list.item', item);
      });
    }
  },
  items: Ember.computed('model.items.[]', 'itemId', function() {
    return this.get('model.items').filter((item) => {
      return item.id !== this.get('itemId');
    });
  }),
  belongsToUser: Ember.computed('model.user.id', 'session.currentUser.id', function() {
    return this.get('model.user.id') === this.get('session.currentUser.id');
  })
});
