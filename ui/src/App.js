import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Alert } from 'reactstrap';
import ThingList from './components/ThingList'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'


// const things = [
//   {name:'bob', id:'1'},
//   {name:'bob2', id:'2'}
// ];

class App extends Component {

  // For components with data from redux we need to do
  // this arg handling with props. We also need to link
  // the render method with this instance on construction
  constructor(props) {
    super(props);
    this.render.bind(this);

    this.state = {buttonPressed:false}
    this.buttonPressed = this.buttonPressed.bind(this)  
  }

  buttonPressed(){
    this.setState({buttonPressed:true})
  }

  // Redux values can be accessed as this.props.XYZ
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>This is the ajax msg loaded on startup:{this.props.data.msg}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert color="danger" isOpen={this.state.buttonPressed}>You done gone and pressed it!</Alert>
        <ThingList/>
        <Button color="danger" onClick={this.buttonPressed}>Never Press this!</Button>
      </div>
    );
  }
}

// React Redux Prop/dispatch  mapping
const mapStateToProps = state => {
  return {
  data: state.data
}}

// Link any async method calls
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);  // withRouter(App)
