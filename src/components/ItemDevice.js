import React from 'react';
import './ItemDevice.css';
import {API} from '../services/API';
import $ from "jquery";
import {
    BrowserRouter,
    Route,
    Link
    } from 'react-router-dom';


class ItemDevice extends React.Component {

    constructor(props){
        super(props);
        this.onRemoveDeviceClick = this.onRemoveDeviceClick.bind(this);
       
    }

    onRemoveDeviceClick(){
        API.removeDevice(this.props.content.id)
        .then((response)=>{
            window.alert("delete device success!");
        })
        .catch((error)=>{
            window.alert("delete device failed!");
        })

    }

    render(){
        return(
            <Link to={`/detail/${this.props.content.id}`}><div className="item-device">
                <ul className="list-property">
                    <li className="device-property">
                        <span className="property-name">imei</span>
                        <span className="property-info">{this.props.content.imei}</span>
                    </li>
                    <li className="device-property">
                        <span className="property-name">type</span>
                        <span className="property-info">{this.props.content.type}</span>
                    </li>
                    <li className="device-property">
                        <span className="property-name">status</span>
                        <span className="property-info">{this.props.content.status}</span>
                    </li>
                    <li className="device-property">
                        <span className="property-name">battery</span>
                        <span className="property-info">{this.props.content.battery}</span>
                        
                    </li>
                    <span className="btn-remove glyphicon glyphicon-remove-circle" onClick={this.onRemoveDeviceClick}></span>
                    
                </ul>
            </div></Link>
        );
    }
}

export default ItemDevice;