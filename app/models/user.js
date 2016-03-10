import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email:      DS.attr('string'),
  firstName:  DS.attr('string'),
  lastName:   DS.attr('string'),
  decisions:  DS.hasMany('decision'),
  responses:  DS.hasMany('response'),

  fullName:  Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
