ListMaker.ListAdapter =  EmberCouchDBKit.DocumentAdapter.extend({
    db: 'lists',
    host: 'http://localhost:5984'
});
ListMaker.ListSerializer = EmberCouchDBKit.DocumentSerializer.extend();
ListMaker.ItemAdapter =  EmberCouchDBKit.DocumentAdapter.extend({
    db: 'items',
    host: 'http://localhost:5984'
});
ListMaker.ItemSerializer = EmberCouchDBKit.DocumentSerializer.extend();
