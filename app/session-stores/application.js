import ENV from 'wyzyr-ember/config/environment';
import Cookie from 'ember-simple-auth/session-stores/cookie';

export default Cookie.extend({
  cookieName: `cloverpop-session`,
  cookieExpirationTime: 60 * 60 * 24 * 14
});
