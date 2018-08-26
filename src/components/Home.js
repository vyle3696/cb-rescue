import React from 'react';
import $ from "jquery";
import Nav from './Nav';
import ItemDevice from './ItemDevice';
import DiaLogAddDevice from "./DialogAddDevice";

import './Home.css';

var listTemp = [];
class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listDevice: listTemp,
            text: "",
            dialog: "<div></div>"
        };

        this.getListDeviceHandle = this.getListDeviceHandle.bind(this);
        this.addNewDeviceHandle = this.addNewDeviceHandle.bind(this);
        this.showAddDeviceDialog = this.showAddDeviceDialog.bind(this);

    }

    showAddDeviceDialog(){

        this.setState({dialog: DiaLogAddDevice});

    }

    

    componentDidMount(){
        this.getListDeviceHandle();


    }

    addNewDeviceHandle(){
        let data = {

        }
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices",
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              "Postman-Token": "d3f2dc85-23f0-4706-afb8-ee0eff3ecdb6"
            },
            "processData": false,
            "data": "{\n    \"name\": \"Device 101\",\n    \"imei\": \"IMEI_101\",\n    \"type\": 1\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    }

    getListDeviceHandle(){
        let that = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices?page=1&limit=10&sort=id&dir=asc&status=1",
            "method": "GET",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.CBRescueUserToken,
              "Cache-Control": "no-cache",
              "Postman-Token": "93c0a0c9-3d20-44da-896c-16d42ca0617d"
            }
          }
          
          $.ajax(settings).done(function (response) {
            listTemp = response;

            that.setState({listDevice: listTemp});
            console.log(that.state.listDevice);
          });
    }

    render(){
        return(
            <div>
                <Nav onAddDeviceClick = {this.showAddDeviceDialog}/>
                <div className = "main-content">
                {
                    this.state.listDevice.map((item, index)=>(
                        <ItemDevice key={index} content={item}/>
                    ))
                }
                </div>
                <DiaLogAddDevice onSubmit = {this.addNewDeviceHandle}/>
            </div>
        );
    }
}

export default Home;