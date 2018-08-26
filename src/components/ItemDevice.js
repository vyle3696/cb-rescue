import React from 'react';
import './ItemDevice.css';
import $ from "jquery";



class ItemDevice extends React.Component {
    render(){
        return(
            <div className="item-device">
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
                    <span className="btn-remove glyphicon glyphicon-remove-circle"></span>
                    
                </ul>
            </div>
        );
    }
}

export default ItemDevice;