import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Alert } from 'reactstrap';
import ThingList from './components/ThingList'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

class App extends Component {

  // For components with data from redux we need to do
  // this arg handling with props. We also need to link
  // the render method with this instance on construction
  // This component also haslocal state which it manages
  // The button state.
  constructor(props) {
    super(props);
    this.render.bind(this);

    this.state = {buttonPressed:false}
    this.onButtonPressed = this.onButtonPressed.bind(this)  
    this.hasMessage = this.hasMessage.bind(this)  
  }

  onButtonPressed(){
    this.setState({buttonPressed:true})
  }

  hasMessage(){
    return !(this.props.alert=== undefined) && this.props.alert.msg !== "";    
  }

  // Redux values can be accessed as this.props.XYZ
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Alert color="info" isOpen={this.hasMessage()}>{this.props.alert.msg}</Alert>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert color="danger" isOpen={this.state.buttonPressed}>You done gone and pressed it!</Alert>
        <ThingList/>
        <Button color="danger" onClick={this.onButtonPressed}>Never Press this!</Button>
      </div>
    );
  }
}

// React Redux Prop/dispatch  mapping
const mapStateToProps = state => {
  return {
  alert: state.alert
}}

// Link any async method calls
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);  // withRouter(App)
