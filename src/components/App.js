import React, { Component } from 'react';
import {API} from '../services/API';
import './App.css';
import Login from './Login';
import Home from './Home';
import DeviceListMap from './DeviceListMap';
import Nav from './Nav';
import DialogAddDevice from "./DialogAddDevice";
import DeviceDetail from './DeviceDetail';

import axios, { get, post } from 'axios';
import $ from "jquery";

import {
  BrowserRouter,
  Route,
  Link
  } from 'react-router-dom';  

  import socketIOClient from 'socket.io-client'

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        dialog: "<div></div>",
        listDevice: [],
        currentMenuActive: "list-device",
        
      };
      this.showAddDeviceDialog = this.showAddDeviceDialog.bind(this);
      this.onGetListDevice = this.onGetListDevice.bind(this);
      this.initSocket = this.initSocket.bind(this);

      this.initSocket();
      this.onGetListDevice();
  }

    initSocket(){
        const socket = socketIOClient("http://cbrescue-dev-echo.sugadev.top:9008",{rejectUnauthorized: false,transports: ['websocket']});

        socket.on('connect', (color) => {
          API.getAuth()
          .then((res)=>{
              socket.emit('authentication', res.data);
              socket.on('device_data_changed', ((data)=>{
                  console.log(data);
                  this.onGetListDevice();
              }));
          });
        })
  
        socket.on('authenticated', function() {
          console.log("authenticated SUCCESS");
        });
    }

    

    onGetListDevice(){
        
        let that = this;
        API.getListDevice()
        .then((response)=>{
                that.setState({listDevice: response.data});
        });
    }

    showAddDeviceDialog(){

        this.setState({dialog: <DialogAddDevice onSubmit = {this.addNewDeviceHandle} rootParent={this}/>});

    }


  render() {
    return(
      <BrowserRouter>
        <div>
        <Nav onAddDeviceClick = {this.showAddDeviceDialog}/>
        <div  className = "main-content">
          <Route exact path="/" render={()=><Home listDevice = {this.state.listDevice}  root={this} />} />
         
          <Route path="/detail/:id" render={(props)=><DeviceDetail {...props} root={this} />} />
          <Route exact path="/map" render={()=><DeviceListMap listDevice = {this.state.listDevice}  root={this} />} />
          <Route path="/login" component={Login}/>
        </div>
        {this.state.dialog}
        </div>
      </BrowserRouter>
    );
    
  }
}

export default App;
