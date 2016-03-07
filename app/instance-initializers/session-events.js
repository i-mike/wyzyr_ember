//export function initialize(appInstance) {
//  //var applicationRoute = appInstance.lookup('route:application');
//  var session          = appInstance.lookup('service:session');
//
//  session.on('authenticationSucceeded', function() {
//    var data = session.get('data.authenticated');
//
//    session.get('store').persist({
//      authenticated: data
//    });
//  });
//  session.on('invalidationSucceeded', function() {
//  });
//  // appInstance.registry.injection('route', 'foo', 'service:foo');
//}

export function initialize(appInstance) {
  //var applicationRoute = appInstance.lookup('route:application');
  //var session          = appInstance.lookup('service:session');
  //
  //session.on('authenticationSucceeded', function() {
  //  var data = session.get('data.authenticated');
  //
  //  session.get('store').persist({
  //    authenticated: data
  //  });
  //});
  //session.on('invalidationSucceeded', function() {
  //});
  // appInstance.registry.injection('route', 'foo', 'service:foo');
}

export default {
  name: 'session-events',
  after: 'ember-simple-auth',
  initialize: initialize
};
