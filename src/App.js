import React, {Component} from 'react';
import TestButton from './components/TestButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        
        <h1 className='header'>NUMBER FACTS</h1>
        <h2 className='main-text output'>waiting for number input....</h2>

        <div className='main-body'>
          <h2 className='main-text'>EXAMPLE NUMBERS:</h2>
          <div className='buttons' align="center">
            <TestButton number={"1"}/>
            <TestButton number={"2"}/>
            <TestButton number={"3"}/>
            <TestButton number={"4"}/>
            <TestButton number={"5"}/>
          </div>


          <div class="custom-field" align="center">
            <h3 className='main-text'>TRY ANY NUMBER!</h3>
            <input type="number" min="0" max="9999" />
          </div>

        </div>

      </div>
    );
  }
}

export default App;
