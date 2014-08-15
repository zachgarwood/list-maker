ListMaker.List = DS.Model.extend({
    description: DS.attr('string'),
    items: DS.hasMany('item', {async: true}),
    title: Ember.computed('description', 'items.length', function() {
        return this.get('items.length') + ' ' + this.get('description');
    })
});
