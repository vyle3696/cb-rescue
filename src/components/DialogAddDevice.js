import React from 'react';
import "./DialogAddDevice.css";
import $ from "jquery";
import {API} from '../services/API';

class DiaLogAddDevice extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notice: "",
            noticeColor: "red"
        }
        this.onCloseDialogClick = this.onCloseDialogClick.bind(this);
        this.onAddNewDevice = this.onAddNewDevice.bind(this);

        this.addNewDeviceSuccess = this.addNewDeviceSuccess.bind(this);
        this.addNewDeviceFailed = this.addNewDeviceFailed.bind(this);
    }

    onAddNewDevice(){
        let that = this;
        API.addNewDevice()
        .then((response)=>{
            that.addNewDeviceSuccess();
        })
        .catch((error)=>{
            that.addNewDeviceFailed();
        })
    }

    addNewDeviceSuccess(){
        this.setState({notice: "success!", noticeColor: "green"});
    }

    addNewDeviceFailed() {
        this.setState({notice: "failed to add device, name or imei already exists!", noticeColor: "red"});
    }


    onCloseDialogClick(){
        this.props.rootParent.setState({dialog: <div></div>});

    }
    render(){
        return(
            <div className="dialog-container">
                <div className="dialog-overlay"></div>
                <div className="dialog-inner">
                    <div className="dialog-form">
                        <div className="form-heading">Add new device<span class="glyphicon glyphicon-remove" onClick={this.onCloseDialogClick} ></span></div>
                        <div className="form-content">
                            <input id="device-name" type="text" name="device-name" placeholder="Device Name"/><br/>
                            <input id="device-imei" type="text" name="device-imei" placeholder="IMEI"/><br/>
                            
                        </div>
                        <input id="add-device-submit" className="" type="button" value="Add" onClick={this.onAddNewDevice}/>
                        <div className="form-notice" style={{color:`${this.state.noticeColor}`}} >
                            {this.state.notice}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DiaLogAddDevice;