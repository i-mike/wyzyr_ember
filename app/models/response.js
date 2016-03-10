import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  user:      DS.belongsTo('user'),
  decision:  DS.belongsTo('decision'),
});
