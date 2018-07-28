import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data:'',
      taskArry:[]
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.deletTask = this.deletTask.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({
      data: event.target.value
    })
  };

  updateState(event){
    console.log('add button click');
    let temp = this.state.taskArry;
    temp.push(event.target.value)
    this.setState({
      taskArry: temp,
      data: ''
    });
    console.log(this.state.taskArry);
  }

  clearInput(){
    console.log('clear button clicked');
    this.setState({
      data: ''
    })
  }

  deletTask(id) {
    console.log('Delete Task', id);
    let remainder = this.state.taskArry;
     remainder.splice(id, 1);
    console.log('&&&',remainder);
    this.setState({taskArry: remainder});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <input type="text" value={this.state.data} onChange={this.handleNameChange} /> 
          <button onClick={this.updateState} value={this.state.data}>Add</button>
          <button onClick={this.clearInput} >Clear</button>
        </p>
        <ul>
         {this.state.taskArry.map((lst,i)=>
          <li key={i} >{lst} <button onClick={this.deletTask.bind(lst,i)}>X</button></li>
        )}
        </ul>
      </div>  
    );
  }
}

export default App;
