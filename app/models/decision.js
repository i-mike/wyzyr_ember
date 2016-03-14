import DS from 'ember-data';

export default DS.Model.extend({
  slug:         DS.attr('string'),
  description:  DS.attr('string'),
  createdAt:    DS.attr('string'),
  user:         DS.belongsTo('user'),
  responses:    DS.hasMany('response')
});
