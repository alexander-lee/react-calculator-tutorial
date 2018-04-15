import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    isOrange: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Button;
