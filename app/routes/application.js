import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from 'wyzyr-ember/config/environment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel() {
    this._super(...arguments);
    this._setCurrentUser();
  },

  sessionAuthenticated() {
    //this._saveAuthenticationDataToSession();  // for local storage
    this._setCurrentUser();
    this._super(...arguments);
  },

  sessionInvalidated() {
    this._cleanupCurrentUser();
    this._super(...arguments);
  },

  // Needed if store will be changed to AdaptiveStore or LocalStorageStore
  _saveAuthenticationDataToSession() {
    const session = this.get('session');
    const data = session.get('data.authenticated');

    session.get('store').persist({
      authenticated: data
    });
  },

  _setCurrentUser() {
    const session = this.get('session');
    const email = session.get('data.authenticated.email');
    const isCurrentUserLoaded = this.get('session.currentUser');

    if (email && !isCurrentUserLoaded) {
      this.store.query('user', { filter: { email: email } }).then((users) => {
        const user = users.get('firstObject');
        session.set('currentUser', user);
      });
    }
  },

  _cleanupCurrentUser() {
    this.get('session').set('currentUser', undefined);
  }
});
