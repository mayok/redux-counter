import React, { PropTypes } from 'react';

const Button = ({ onIncrement, onDecrement }) => (
  <div>
    <button
      onClick={(e) => {
        e.preventDefault();
        onIncrement();
      }}
    >
      Increment
    </button>

    <button
      onClick={(e) => {
        e.preventDefault();
        onDecrement();
      }}
    >
      Decrement
    </button>
  </div>
);

Button.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Button;
