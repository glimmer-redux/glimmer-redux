import connect from '../../../connect';
import { filteredTodos } from '../../../reducers/index';

const stateToComputed = state => ({
  todos: filteredTodos(state)
});

const dispatchToActions = dispatch => ({
  filter: () => dispatch({type: 'FILTER_TODO'})
});

export default connect(stateToComputed, dispatchToActions)();
