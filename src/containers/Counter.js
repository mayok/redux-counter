import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Button from '../components/Button';

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch(increment());
  },

  onDecrement: () => {
    dispatch(decrement());
  },
});

const Counter = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Counter;
