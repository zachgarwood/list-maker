import { moduleForModel, test } from 'ember-qunit';

moduleForModel('star', 'Unit | Model | star', {
  // Specify the other units that are required for this test.
  needs: ['model:item', 'model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
