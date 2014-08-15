ListMaker.ItemsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('item');
    }
});
ListMaker.ItemRoute = Ember.Route.extend({
    model: function(param) {
        return this.store.find('item', param.item_id);
    }
});
