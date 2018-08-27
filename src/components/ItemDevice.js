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
            <div className="item-device">
                <Link to={`/detail/${this.props.content.id}`}>
                    <ul className="list-property">
                         <li className="device-property">
                            <span className="property-name">name</span>
                            <span className="property-info">{this.props.content.name}</span>
                        </li>
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
                    
                    
                    </ul>
                </Link>
                <span className="btn-remove glyphicon glyphicon-remove-circle" onClick={this.onRemoveDeviceClick}></span>
            </div>
        );
    }
}

export default ItemDevice;