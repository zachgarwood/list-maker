import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var list = this.store.createRecord('list', {
        description: this.get('description')
      }); 
      list.save();
    }
  }
});
