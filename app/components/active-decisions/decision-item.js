import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['decision-tile'],

  tileButtonClass: Ember.computed(function() {
    return `${this.get('response.homePageAction')}-btn`;
  }),

  tileButtonText: Ember.computed(function() {
    return Ember.String.capitalize(this.get('response.homePageAction'));
  }),

  tilePath: Ember.computed(function() {
    return `decisions/${this.get('response.decision.slug')}?trigger_action=${this.get('response.homePageAction')}`;
  }),
});
