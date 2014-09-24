ListMaker.Router.map(function () {
    this.resource('lists');
    this.resource('list', {path: '/list/:list_id'});
    this.resource('item', {path: '/item/:item_id'});
});
