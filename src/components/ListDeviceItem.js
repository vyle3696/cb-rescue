import React from 'react';
//import './ItemDevice.css';
import {API} from '../services/API';
import $ from "jquery";
import {
    BrowserRouter,
    Route,
    Link
    } from 'react-router-dom';


class ListDeviceItem extends React.Component {

    constructor(props){
        super(props);
        this.onRemoveDeviceClick = this.onRemoveDeviceClick.bind(this);
    }

    onRemoveDeviceClick(e){
        let that = this;
        e.stopPropagation();

        API.removeDevice(this.props.content.id)
        .then((response)=>{
            window.alert("delete device success!");
            that.props.root.onGetListDevice();
        })
        .catch((error)=>{
            window.alert("delete device failed!");
        })

    }

    render(){
        return(
            <div class="device-table-row">
				<div class="device-table-col textgray device-property">{this.props.content.name}</div>
				<div class="device-table-col textgray device-property">{this.props.content.imei}</div>
				<div class="device-table-col textgray device-property">{this.props.content.type}</div>
				<div class="device-table-col textgray device-property">{this.props.content.status}</div>
                <div class="device-table-col textgray device-property">{this.props.content.battery}</div>
				
				<div class="device-table-col device-property">
                    <span className="btn-remove glyphicon glyphicon-remove-circle" onClick={this.onRemoveDeviceClick}></span>
				</div>
			</div>
        );
    }
}

export default ListDeviceItem;