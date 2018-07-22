import connect from '../../../connect';
import Component, { tracked } from '@glimmer/component';

class HeaderComponent extends Component {
  @tracked value: string = 'hello';
  @tracked
  get text() {
    return this.value;
  }
}

const addTodo = (text) => (dispatch) => dispatch({type: 'ADD_TODO', text});

const dispatchToActions = {
  addTodo
};

export default connect(null, dispatchToActions)(HeaderComponent);
