import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle:true
    }
  }
  somefunc = () => {
    this.setState({
      toggle:!this.state.toggle
    })
  }
  render() {
    let {toggle} = this.state;
    toggle = toggle.toString().toUpperCase();
    return (
      <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p align='center' onClick={this.somefunc} style={{cursor:'pointer'}}> Click me</p>
    <p align='center'>Toggle value : {this.state.toggle && <span style={{color:'green'}}>{toggle}</span>
    }{!this.state.toggle && <span style={{color:'red'}}> {toggle}</span>}</p>
      </header>
      </div>
    )
  }
}
