import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import ENV from 'wyzyr-ember/config/environment';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  beforeModel() {
    if (ENV.environment === 'development') {
      console.log(`${ENV.API_URL}/users/sign_in`);
      window.location.replace(`${ENV.API_URL}/users/sign_in`);
    } else {
      window.location.replace("/users/sign_in");
    }

  },

  renderTemplate: function() {
    this.disconnectOutlet();
    //this.render('none');
  }

});
