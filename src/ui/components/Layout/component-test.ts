import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';
import { resetStore } from '../../../store';

const { module, test } = QUnit;

module('Component: Layout', function(hooks) {
  setupRenderingTest(hooks);

  test('shared global state will rerender when action dispatched', async function(assert) {
    resetStore();

    await this.render(hbs`<Layout />`);
    let number = this.containerElement.querySelector('.number-up').textContent;
    assert.equal(number, '0');
    this.containerElement.querySelector('.number-add').click();
    let done = assert.async();
    setTimeout(() => {
      number = this.containerElement.querySelector('.number-up').textContent;
      assert.equal(number, '1');
      done();
    }, 10);
  });

  test('any local state can be passed into connect from a glimmer component class', async function(assert) {
    resetStore();

    await this.render(hbs`<Layout />`);
    let localState = this.containerElement.querySelector('.todo-add-text').textContent;
    assert.equal(localState, 'hello');
  });

  test('shared global state will rerender across multiple component templates', async function(assert) {
    resetStore();

    await this.render(hbs`<Layout />`);
    let sectionTodos = this.containerElement.querySelector('.todo-list');
    assert.equal(sectionTodos.children.length, 1);

    let filteredTodos = this.containerElement.querySelector('.filtered-todo-list');
    assert.equal(filteredTodos.children.length, 1);

    let footerTodos = this.containerElement.querySelector('.footer-todo-list');
    assert.equal(footerTodos.children.length, 1);

    this.containerElement.querySelector('.todo-add').click();
    let done = assert.async();

    setTimeout(() => {
      sectionTodos = this.containerElement.querySelector('.todo-list');
      assert.equal(sectionTodos.children.length, 2);

      filteredTodos = this.containerElement.querySelector('.filtered-todo-list');
      assert.equal(filteredTodos.children.length, 2);

      footerTodos = this.containerElement.querySelector('.footer-todo-list');
      assert.equal(footerTodos.children.length, 2);

      done();
    }, 10);
  });
});
