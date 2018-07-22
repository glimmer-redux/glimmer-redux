import connect from '../../../connect';
import { filteredTodos } from '../../../reducers/index';

const stateToComputed = (state) => ({
  todos: state.todos.all,
  filtered: filteredTodos(state)
});

export default connect(stateToComputed)();
