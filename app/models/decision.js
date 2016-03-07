import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  createdAt: DS.attr('string'),
  user:         DS.belongsTo('user')
});
