import React from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  // shorthand of doing constructor() here down below is:
  state = { count: 0 }

  inc = () => {
    this.setState({ count: this.state.count + 1 })
  }

  dec = () => {
    this.setState({ count: this.state.count - 1 })
  }

  reset = () => {
    this.setState({ count: 0 })
  }
  
  render() {
    return (
      <div className="App" >
        <Counter count={this.state.count} inc={this.inc} dec={this.dec} reset={this.reset} />
      </div>
    );
  }
}


export default App;
