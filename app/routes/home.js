import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    const self = this;
    const userId = this.get('session').get('currentUser').get('id');
    const user = this.store.peekRecord('user', userId);
    return this.store.query('response', { filter: { userId: userId } }).then((responses) => {
      //let decisions_ids = responses.map((response) => {
      //  return response._internalModel._relationships.initializedRelationships['decision'].canonicalState.id;
      //});
    });
  },

  //_loadResponses() {
  //  //return this.get('session').get('currentUser').get('responses');
  //  const u = this.get('session').get('currentUser');
  //  const userId = this.get('session').get('currentUser').get('id');
  //  return this.store.query('response', { filter: { user: u } });
  //}

});
