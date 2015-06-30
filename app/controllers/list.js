import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addItem: function(itemProperties) {
      var newItem = this.store.createRecord('item', itemProperties);

      var list = this.get('model');
      list.get('items').pushObject(newItem);                    

      newItem.save().then(function() {
        list.save();
      });
    }
  }
});
