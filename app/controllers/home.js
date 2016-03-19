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
  }),

  activeResponses: Ember.computed(function() {
    let responses = this.get('session.currentUser.responses').filter((response, index, self) => {
      //if(response.get('isHomePageActiveTileSection')) {
      if(response.get('homePageSection') === 'active') {
        return response;
      }
    });

    return responses;
  })
});
