import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      let controller = this;
      controller.store.find(
        'user',
        controller.get('session.uid')
      ).then((user) => {
        let list = controller.store.createRecord('list', {
          description: controller.get('description'),
          user: user,
        });
        list.save().then((list) => {
          user.get('lists').addObject(list);
          user.save();
          controller.transitionToRoute('list', list.id);
          controller.set('description', null);
        });
      });
    }
  }
});
