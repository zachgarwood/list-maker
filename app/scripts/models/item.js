App.Item = DS.Model.extend({
    description: DS.attr('string'),
    image: DS.attr('string'),
    list: DS.belongsTo('list', {async: true}),
    title: DS.attr('string')
});
