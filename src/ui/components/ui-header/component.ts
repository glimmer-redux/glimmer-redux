import connect from '../../../connect';
import Component, { tracked } from '@glimmer/component';

class HeaderComponent extends Component {
  @tracked _text: string = 'hello';
  @tracked
  get text() {
    return this._text;
  }
}

const addTodo = text => dispatch => dispatch({type: 'ADD_TODO', text});

const dispatchToActions = {
  addTodo
}

export default connect(null, dispatchToActions)(HeaderComponent);
