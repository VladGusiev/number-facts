import React, {Component} from 'react';
import TestButton from './components/TestButton';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: ''
    }
  }


  //inital random fact
  componentDidMount() {
    fetch("http://numbersapi.com/random?json")
        .then(response => response.json())
        .then(data => this.setState({searchfield: data.text}));
  }
  

  //for searchbar functionality
  onSearchChange = (event) => {
    fetch(`http://numbersapi.com/${event.target.value}?json`)
        .then(response => response.json())
        .then(data => this.setState({searchfield: data.text}));
  }

  //for buttons functionality
  onClickChange = (event) => {
    fetch(`http://numbersapi.com/${event.target.value}?json`)
        .then(response => response.json())
        .then(data => this.setState({searchfield: data.text}));
  }


  render() {
    const {searchfield} = this.state;

    return (
      <div>
        
        <h1 className='header'>NUMBER FACTS</h1>
        <h2 className='main-text output'>{searchfield}</h2>

        <div className='main-body'>
          <h2 className='main-text'>EXAMPLE NUMBERS:</h2>
          <div className='buttons' align="center">
            <TestButton onClickChange={this.onClickChange} number={"1"}/>
            <TestButton onClickChange={this.onClickChange} number={"2"}/>
            <TestButton onClickChange={this.onClickChange} number={"3"}/>
            <TestButton onClickChange={this.onClickChange} number={"4"}/>
            <TestButton onClickChange={this.onClickChange} number={"5"}/>
            <TestButton onClickChange={this.onClickChange} number={"random"}/>
          </div>

          <div className="custom-field" align="center">
            <h3 className='main-text'>TRY ANY NUMBER!</h3>
            <input type="number" min="0" max="9999" onChange={this.onSearchChange}/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
