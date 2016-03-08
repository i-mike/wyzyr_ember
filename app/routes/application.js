import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from 'wyzyr-ember/config/environment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel() {
    let self = this;
    let promise = new Promise(function(resolve, reject) {
      self._super(...arguments);
      self._setCurrentUser().then(function(user) {
        resolve(user);
      }, function(reason) {
        reject(reason);
      });
    });

    promise.then(function(user) {
      console.log(`${user.get('fullName')} logged in`);
    }, function(reason) {
      console.log(`FAIL ${reason}`);
    });
    return promise;
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
    let self = this;
    return new Promise(function(resolve, reject) {
      const session = self.get('session');
      const email = session.get('data.authenticated.email');
      const isCurrentUserLoaded = self.get('session.currentUser');

      if (email && !isCurrentUserLoaded) {
        self.store.query('user', { filter: { email: email } }).then((users) => {
          const user = users.get('firstObject');
          console.log(session);
          session.set('currentUser', user);
          resolve(user);
        }, function(reason) {
          reject(reason)
        });
      } else {
        resolve(session.get('currentUser'));
      }


    });

  },

  _cleanupCurrentUser() {
    this.get('session').set('currentUser', undefined);
  }

});
