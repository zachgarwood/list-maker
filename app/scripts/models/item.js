ListMaker.Item = DS.Model.extend({
    image: DS.attr('string'),
    list: DS.belongsTo('list', {async: true}),
    text: DS.attr('string')
});
