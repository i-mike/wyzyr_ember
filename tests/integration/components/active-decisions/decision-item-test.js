import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('active-decisions/decision-item', 'Integration | Component | active decisions/decision item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{active-decisions/decision-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#active-decisions/decision-item}}
      template block text
    {{/active-decisions/decision-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
