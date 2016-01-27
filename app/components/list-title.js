import Ember from 'ember';

export default Ember.Component.extend({
  title: Ember.computed('list.items.[]', 'list.description', function() {
    let count = this.get('list.items.length');
    let title = this.get('list.description');
    if (count > 1) {
      title = `${count} ${title}`;
    }

    return title;
  })
});
