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
            <Button
              text="AC"
              onClick={}
            />
            <Button
              text="Ans"
              onClick={}
            />
            <Button
              text="+/-"
              onClick={}
            />
            <Button
              isOrange={true}
              text="÷"
              onClick={}
            />
          </div>
          <div className="row">
            <Button
              text="7"
              onClick={}
            />
            <Button
              text="8"
              onClick={}
            />
            <Button
              text="9"
              onClick={}
            />
            <Button
              isOrange={true}
              text="×"
              onClick={}
            />
          </div>
          <div className="row">
            <Button
              text="4"
              onClick={}
            />
            <Button
              text="5"
              onClick={}
            />
            <Button
              text="6"
              onClick={}
            />
            <Button
              isOrange={true}
              text="-"
              onClick={}
            />
          </div>
          <div className="row">
            <Button
              text="1"
              onClick={}
            />
            <Button
              text="2"
              onClick={}
            />
            <Button
              text="3"
              onClick={}
            />
            <Button
              isOrange={true}
              text="+"
              onClick={}
            />
          </div>
          <div className="row">
            <Button
              isTwoSpaced={true}
              text="0"
              onClick={}
            />
            <Button
              text="."
              onClick={}
            />
            <Button
              isOrange={true}
              text="="
              onClick={}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
