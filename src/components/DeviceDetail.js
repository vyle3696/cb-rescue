import React from 'react';
import {API} from '../services/API';
import DeviceDetailMap from './DeviceDetailMap';

import DiaLogEditDevice from "./DialogEditDevice";

import './DeviceDetail.css';

import socketIOClient from 'socket.io-client';

class DeviceDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deviceDetail: {},
            dialog: "<div></div>",
        };

        this.onGetDeviceDetail = this.onGetDeviceDetail.bind(this);
        this.onShowDialog = this.onShowDialog.bind(this);

        this.initSocket = this.initSocket.bind(this);
        this.initSocket();

        this.onGetDeviceDetail();

   
}

    initSocket(){
        //let that = this;
        const socket = socketIOClient("http://cbrescue-dev-echo.sugadev.top:9008",{rejectUnauthorized: false,transports: ['websocket']});

        socket.on('connect', (color) => {
        API.getAuth()
        .then((res)=>{
            socket.emit('authentication', res.data);
            socket.on('device_data_changed', ((data)=>{
                console.log(data);
                this.onGetDeviceDetail();
            }));
        });
        })

        socket.on('authenticated', function() {
        console.log("authenticated SUCCESS");
        });
    }
    
    onGetDeviceDetail(){
        let that = this;
		API.getDeviceDetail(that.props.match.params.id)
		.then((response)=>{
            that.setState({deviceDetail: response.data});
		});
    }
    
    onShowDialog(){
        this.setState({dialog: <DiaLogEditDevice deviceDetail={this.state.deviceDetail} parent = {this} root = {this.props.root}/>});
    }

    render(){
        if(!this.state.deviceDetail.id){
            return(
                <div></div>
            );
        }else{
            return(
                <div className="device-detail">
                    
                    <ul className="list-property list-vertical">
                        <h1>DEVICE: {this.state.deviceDetail.name}</h1>

                        <li className="device-property">
                            <span className="property-name">imei: </span>
                            <span className="property-info">{this.state.deviceDetail.imei}</span>
                        </li>
                        <li className="device-property">
                            <span className="property-name">type: </span>
                            <span className="property-info">{this.state.deviceDetail.type}</span>
                        </li>
                        <li className="device-property">
                            <span className="property-name">status: </span>
                            <span className="property-info">{this.state.deviceDetail.status}</span>
                        </li>
                        <li className="device-property">
                            <span className="property-name">battery: </span>
                            <span className="property-info">{this.state.deviceDetail.battery}</span>
                            
                        </li>
                        <span className="btn-edit" onClick={this.onShowDialog}><i className="fa fa-edit"></i></span>
                        
                    </ul>
                    <div className="device-map" ><DeviceDetailMap  deviceDetail = {this.state.deviceDetail} /></div>

                    {this.state.dialog}
                </div>
            );
        }
        
    }
}

export default DeviceDetail;