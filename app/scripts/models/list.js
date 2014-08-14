ListMaker.List = DS.Model.extend({
    items: DS.hasMany('item', {async: true}),
    title: DS.attr('string')
});
