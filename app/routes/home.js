import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    const session = this.get('session');
    const userId = session.get('currentUser').get('id');
    //return this.store.findAll('decision');
    this.store.query('decision', { filter: { user_id: userId } }).then((decisions) => {
      //const user = users.get('firstObject');
      //session.set('currentUser', user);
    });
  }
});
