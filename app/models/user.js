import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  items: DS.hasMany('item', { async: true }),
  lists: DS.hasMany('list', { async: true }),
});
