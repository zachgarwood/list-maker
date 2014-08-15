ListMaker.Router.map(function () {
    this.resource('lists', function() {
    });
    this.resource('list', {path: 'list/:list_id'}, function() {
        this.resource('items', {path: '/'});
        this.resource('item', {path: 'item/:item_id'}, function() {
        });
    });
});
