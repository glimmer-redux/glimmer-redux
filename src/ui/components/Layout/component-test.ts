import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: glimmer-redux', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<Layout />`);
    assert.equal(this.containerElement.textContent, 'Glimmer Redux!\n');
  });
});
