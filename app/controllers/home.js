import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  decisions: Ember.computed(function() {
    //const user = this.store.peekRecord('user', this.get('session').get('currentUser').get('id'));
    //let responses = user.get('responses');
    let responses = this.get('session').get('currentUser').get('responses');

    let decisions_ids = responses.map(function(response) {
      return response._internalModel._relationships.initializedRelationships['decision'].canonicalState.id;
    });

    return this.store.peekAll('decision').map(function(decision) {
      if(decisions_ids.indexOf(decision.get('id')) >= 0) {
        return decision;
      }
    });
  })
});
