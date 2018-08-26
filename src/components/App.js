import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import SimpleMap from './SimpleMap';
import Nav from './Nav';
import DiaLogAddDevice from "./DialogAddDevice";
import DeviceDetail from './DeviceDetail';

import {
  BrowserRouter,
  Route,
  Link
  } from 'react-router-dom';


  

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dialog: "<div></div>"
  };

    this.showAddDeviceDialog = this.showAddDeviceDialog.bind(this);
  }

  showAddDeviceDialog(){

    this.setState({dialog: <DiaLogAddDevice onSubmit = {this.addNewDeviceHandle} rootParent={this}/>});

  }

  render() {
    return(
      <BrowserRouter>
        <div>
        <Nav onAddDeviceClick = {this.showAddDeviceDialog}/>
        <div  className = "main-content">
          <Route exact path="/" component={ Home } />
          <Route path="/detail/:id" component={DeviceDetail}/>
          <Route exact path="/map" component={ SimpleMap } />
          <Route path="/login" component={Login}/>
        </div>
        {this.state.dialog}
        </div>
      </BrowserRouter>
    );
    
  }
}

export default App;
