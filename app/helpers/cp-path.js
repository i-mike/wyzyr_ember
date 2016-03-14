import Ember from 'ember';
import ENV from 'wyzyr-ember/config/environment';

export function cpPath(params/*, hash*/) {
  let host = (ENV.environment === "development-embedded") ? "" : "http://localhost:3000";
  let path = params.join('/');
  return `${host}/${path}`;
}

export default Ember.Helper.helper(cpPath);
