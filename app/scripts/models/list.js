App.List = DS.Model.extend({
    description: DS.attr('string'),
    items: DS.hasMany('item', {async: true}),
    serializedTitle: Ember.computed('description', function() {
        return this.get('description').split(' ').join('-').toLowerCase();
    }),
    title: Ember.computed('description', 'items.length', function() {
        var title = this.get('description');
        if (this.get('items.length') >= 3) {
            title = this.get('items.length') + ' ' + title;
        }
        return title;
    })
});
