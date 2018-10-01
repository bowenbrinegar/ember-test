import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | complete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:complete');
    assert.ok(route);
  });
});
