import { combineReducers } from 'redux';

const number = (state, action) => {
  if(action.type === 'UP') {
    let added = state.up + 1;
    return Object.assign({}, state, {up: added});
  }
  return state || {up: 0, down: 9};
};

const initialState = {
  filter: undefined,
  all: {
    1: {
      id: 1,
      text: 'Use Glimmer Redux',
      completed: false
    }
  }
};

const todos = (state, action) => {
  if(action.type === 'FILTER_TODO') {
    let filter = state.filter ? undefined : true;
    return {
      ...state,
      filter: filter
    }
  }
  if(action.type === 'ADD_TODO') {
    let id = Object.values(state.all).reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
    let todo = {
      [id]: {
        id: id,
        completed: true,
        text: action.text
      }
    }
    return {
      ...state,
      all: {...state.all, ...todo}
    }
  }
  return state || initialState;
};

export default combineReducers({
  number,
  todos
});

export const filteredTodos = state => {
  const all = state.todos.all;
  const filter = state.todos.filter;
  return Object.keys(all).filter((id) => {
    return filter === undefined || filter === all[id].completed;
  }).reduce((previous, id) => {
    return {
      ...previous,
      [id]: { ...all[id] }
    }
  }, {});
}
