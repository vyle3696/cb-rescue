import React from 'react';
import $ from "jquery";
import {API} from '../services/API';
import ItemDevice from './ItemDevice';
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
                    
                    <div>
                    {
                        this.props.listDevice.map((item, index)=>(
                            <ItemDevice key={index} content={item} root = {this.props.root}/>
                        ))
                    }
                    </div>
                    
                </div>
            );
        }
        

        
    }
}

export default Home;