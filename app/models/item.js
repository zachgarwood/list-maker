import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  image: DS.attr('string'),
  list: DS.belongsTo('list', { async: true }),
  stars: DS.hasMany('star', { async: true }),
  title: DS.attr('string'),
  user: DS.belongsTo('user', { async: true }),
});
