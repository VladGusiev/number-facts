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

  componentDidMount() {
    fetch("http://numbersapi.com/random?json")
        .then(response => response.json())
        .then(data => this.setState({searchfield: data.text}));
  }
  
  onSearchChange = (event) => {
    fetch(`http://numbersapi.com/${event.target.value}?json`)
        .then(response => response.json())
        .then(data => this.setState({searchfield: data.text}));
  }

  onClickChange = (event) => {
    fetch(`http://numbersapi.com/${event.target.textContent}?json`)
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
            <TestButton onClick={this.onClickChange} number={"1"}/>
            <TestButton onClick={this.onClickChange} number={"2"}/>
            <TestButton  number={"3"}/>
            <TestButton  number={"4"}/>
            <TestButton  number={"5"}/>
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
