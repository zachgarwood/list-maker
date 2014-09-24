App.ListAdapter =  EmberCouchDBKit.DocumentAdapter.extend({
    db: 'lists',
    host: 'http://localhost:5984'
});
App.ListSerializer = EmberCouchDBKit.DocumentSerializer.extend();
App.ItemAdapter =  EmberCouchDBKit.DocumentAdapter.extend({
    db: 'items',
    host: 'http://localhost:5984'
});
App.ItemSerializer = EmberCouchDBKit.DocumentSerializer.extend();
