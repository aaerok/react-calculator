import React, { Component } from 'react';
import './styles.css';
/* eslint no-eval: 0 */

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      display: '',
      answer: '',
      inputWithoutSymbols: '',
      isSymbol: false,
      isDecimal: false
    };
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <table>
          <tbody>
          <td className="calc">{this.state.display}</td>

          <tr>
            <button className="clear clearbutton" label="clear" value="clear"
              onClick={this.onClick}>clear</button>
            <button className="symbol" onClick={this.onClick} label="÷" value="/">÷</button>
          </tr>

        <tr>
          <div className="num">
            <button label="7" value="7" onClick={this.onClick}>7</button>
            <button label="8" value="8" onClick={this.onClick}>8</button>
            <button label="9" value="9" onClick={this.onClick}>9</button>
          </div>
          <button className="symbol" onClick={this.onClick} label="x" value="*">x</button>
        </tr>

        <tr>
          <div className="num">
            <button label="4" value="4" onClick={this.onClick}>4</button>
            <button label="5" value="5" onClick={this.onClick}>5</button>
            <button label="6" value="6" onClick={this.onClick}>6</button>
          </div>
          <button className="symbol" onClick={this.onClick} label="-" value="-">-</button>
        </tr>

        <tr>
          <div className="num">
            <button label="1" value="1" onClick={this.onClick}>1</button>
            <button label="2" value="2" onClick={this.onClick}>2</button>
            <button label="3" value="3" onClick={this.onClick}>3</button>
          </div>
          <button className="symbol" onClick={this.onClick} label="+" value="+">+</button>
        </tr>

        <tr>
          <button className="zero" label="0" value="0" onClick={this.onClick}>0</button>
          <button onClick={this.onClick} label="." value=".">.</button>
          <button className="symbol" onClick={this.onClick} label="=" value="=">=</button>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
  onClick(e) {
    var value = e.target.value;
    switch (value) {
      case 'clear': {
          this.setState({input: '', answer: '', isDecimal: false,
          inputWithoutSymbols: '', display: '', isSymbol: false});
          break;
      }
      case '=': {
          const answer = eval(this.state.input).toString();
          this.setState({input: answer, display: answer,
          inputWithoutSymbols: answer});
          break;
      }
      case '.': {
        if (!this.state.isDecimal) {
          this.setState({input: this.state.input + value, isDecimal: true,
          inputWithoutSymbols: this.state.input + value, 
          display: this.state.inputWithoutSymbols + value});
        }
        break;
      }
      default: {
        if (isNaN(value) && value !== '.' && !this.state.isSymbol) {
          this.setState({input: this.state.input + value, 
            display: this.state.inputWithoutSymbols, isSymbol: true,
            isDecimal: false, inputWithoutSymbols: ''});  
        } else {
          if (this.state.isSymbol) {
            this.setState({input: this.state.input + value, 
              inputWithoutSymbols: this.state.inputWithoutSymbols + value, 
              display: value, isSymbol: false});
          } else {
            this.setState({input: this.state.input + value, inputWithoutSymbols: 
              this.state.inputWithoutSymbols + value, display: this.state.inputWithoutSymbols + value, 
              isSymbol: false});
          }
        }
        break;
      }
    }
  }
}

export default Calc;
