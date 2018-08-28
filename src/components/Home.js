import React from 'react';
import $ from "jquery";
import {API} from '../services/API';
import ItemDevice from './ItemDevice';
import ListDeviceItem from './ListDeviceItem';

import DiaLogAddDevice from "./DialogAddDevice";
import axios, { get } from 'axios';
import {
    BrowserRouter,
    Route,
    Link
    } from 'react-router-dom';

import './Home.css';

class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listDevice: [],
            text: "",
            dialog: "<div></div>"
        };

      
        //this.showAddDeviceDialog = this.showAddDeviceDialog.bind(this);
        this.onGetListDevice = this.onGetListDevice.bind(this);

    }

    

    

    componentDidMount(){
       // this.getListDeviceHandle();
       this.onGetListDevice();

    }

    onGetListDevice(){
        let that = this;
		API.getListDevice()
		.then((response)=>{
            that.setState({listDevice: response.data});
		});
	}
    
    render(){
        if(!this.props.listDevice) {
            return(<div>No data</div>)
        }else{
            return(
                <div>
                    <div class="inbox-head">
                        <h3>IMEI</h3>
                        <form action="#" class="pull-right position">
                            <div class="input-append">
                                <input type="text" class="sr-input" placeholder="Search IMEI"/>
                                <button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="device-table">
                        <div class="device-table-box scroll-bar mousewheel-horizontal-scroll">
                            <div class="device-table">
                                <div class="device-table-row device-table-row-header">				
                                    <div class="device-table-col" >name</div>
                                    <div class="device-table-col" >imei</div>
                                    <div class="device-table-col" >type</div>
                                    <div class="device-table-col" >status</div>
                                    <div class="device-table-col" >battery</div>
                                    
                                    <div class="device-table-col device-table-col-button">
                                        <div class="icon-func setting" id="device-icon-setting"></div>
                                    </div>
                                </div>
                                {
                                    this.props.listDevice.map((item, index)=>(
                                        <ListDeviceItem key={index} content={item} root = {this.props.root}/>
                                    ))
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            );
        }
        

        
    }
}

export default Home;