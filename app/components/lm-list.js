import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItem: function() {
      var itemProperties = {
        description: this.get('description'),
        image: this.get('image'),
        title: this.get('title'),
        list: this.get('list')
      };
      this.sendAction('action', itemProperties);

      this.set('description', '');
      this.set('image', '');
      this.set('title', '');
    }
  }
});
