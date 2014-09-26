App.Router.map(function () {
    this.resource('lists', function() {
        this.route('create');
    });
    this.resource('list', {path: '/list/:list_id'});
    this.resource('item', {path: '/item/:item_id'});
});
