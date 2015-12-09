import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      var route = this;
      var store = this.get('store');
      this.get('session').open('firebase', { provider: provider }).then(function(data) {
        let currentUser = store.find('user', data.currentUser.id).then(function() {
          // noop
        }, function() {
          var user = store.createRecord('user', { id: data.currentUser.id, displayName: data.currentUser.displayName });
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
