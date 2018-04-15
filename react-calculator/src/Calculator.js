import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="display-screen">
          <div className="calculation-item">
            0
          </div>
        </div>
        <div className="buttons-section">
          <div className="row">
            <div className="button">AC</div>
            <div className="button">Ans</div>
            <div className="button">+/−</div>
            <div className="button orange">÷</div>
          </div>
          <div className="row">
            <div className="button">7</div>
            <div className="button">8</div>
            <div className="button">9</div>
            <div className="button orange">×</div>
          </div>
          <div className="row">
            <div className="button">4</div>
            <div className="button">5</div>
            <div className="button">6</div>
            <div className="button orange">−</div>
          </div>
          <div className="row">
            <div className="button">1</div>
            <div className="button">2</div>
            <div className="button">3</div>
            <div className="button orange">+</div>
          </div>
          <div className="row">
            <div className="button two-space">0</div>
            <div className="button">.</div>
            <div className="button orange">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
