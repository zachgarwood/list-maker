import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addItem: function(itemProperties) {
      let controller = this;
      let list = controller.get('model');
      controller.store.find(
        'user',
        controller.get('session.currentUser.id')
      ).then((user) => {
        itemProperties['user'] = user;
        let item = controller.store.createRecord('item', itemProperties);
        item.save().then((item) => {
          list.get('items').addObject(item);
          list.save();
          user.get('items').addObject(item);
          user.save();
        });
      });
    }
  }
});
