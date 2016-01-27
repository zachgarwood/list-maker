import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function(error) {
      console.log(error);
    });
  },

  actions: {
    createList() {
      let route = this;
      route.store.find(
        'user',
        route.get('session.currentUser.id')
      ).then((user) => {
        let list = route.store.createRecord('list', {
          description: 'New untitled list!',
          user: user,
        });
        list.save().then((list) => {
          user.get('lists').addObject(list);
          user.save();
          route.transitionTo('list', list.id);
        });
      });
    },
    signIn: function(provider) {
      var route = this;
      var store = this.get('store');
      this.get('session').open('firebase', { provider: provider }).then(function(data) {
        store.find('user', data.currentUser.id).then(function() {
          // noop
        }, function() {
          var user = store.createRecord(
            'user',
            { id: data.currentUser.id, displayName: data.currentUser.displayName }
          );
          user.save();
        });
        route.transitionTo('/');
      }, function() {
        route.transitionTo('/');
      });
    },

    signOut: function() {
      this.get('session').close();
      this.transitionTo('signin');
    }
  }
});
