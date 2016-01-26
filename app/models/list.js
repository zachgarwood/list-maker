import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  items: DS.hasMany('item', { async: true }),
  user: DS.belongsTo('user', { async: true }),
});
