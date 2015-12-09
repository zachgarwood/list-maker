import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  items: DS.hasMany('item', {async: true}),
  list: DS.hasMany('list', {async: true})
});
