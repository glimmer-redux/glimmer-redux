import connect from '../../../connect';

const stateToComputed = (state) => ({
  up: state.number.up
});

const dispatchToActions = (dispatch) => ({
  update: () => dispatch({type: 'UP'})
});

export default connect(stateToComputed, dispatchToActions)();
