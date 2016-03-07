import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'wyzyr-ember/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: ENV.API_URL,
  namespace: 'api/v1',
  authorizer: 'authorizer:devise'
});

