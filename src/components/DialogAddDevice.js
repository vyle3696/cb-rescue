import React from 'react';
//import "./DialogAddDevice.css";
import $ from "jquery";
import {API} from '../services/API';

class DialogAddDevice extends React.Component {
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

        this.addNewDeviceHandle = this.addNewDeviceHandle.bind(this);
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

        //this.addNewDeviceHandle();
    }

    addNewDeviceHandle(){
        let that =this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices",
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhMDEyNTgxODZhYjBiNTU3OWQzZTE0MWQ2YTU4ZjhkYWFlZGFkNzkwNGMzZjk1N2JiZGZlYmJhNDdmODU2MWJjZmVkNDZjYzM3ZjA2NzY4In0.eyJhdWQiOiIyIiwianRpIjoiMmEwMTI1ODE4NmFiMGI1NTc5ZDNlMTQxZDZhNThmOGRhYWVkYWQ3OTA0YzNmOTU3YmJkZmViYmE0N2Y4NTYxYmNmZWQ0NmNjMzdmMDY3NjgiLCJpYXQiOjE1MzUxNzI3MjMsIm5iZiI6MTUzNTE3MjcyMywiZXhwIjoxNTY2NzA4NzIzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.FOGf7AvP8PtSITgTMFQDV-O06XwHQz6IPbaGCDeDivodPLB5kf0sHLPfEv-7ejzYlieKHTW_WL7qH76vPpxZ5FwVBCJqbPgG22NSS9qS__Xi32zfBpG-0de5AlvbN7tTypVdGWCnBX9BXEUlbZ_dRtuF3efEflqDqxhHtm4gNUTgU7KyzjoIGOGZeFolutFYvMVPtn8lLwWo5YXx_jFshkc3A1EFBkkOwqnQnHlUtyNc3QGD3Jd0W382mwW1ETin22IRBTDRxSqtnfBpiMCwafTrLR43rJUqGsGN6AozLn3noASgU15dY_tlKsxOA8m-ccJV930B3ELhZrNc2AfaCvmbQxUnEK5delIOhgNkRrFK5pyOxlL_mINEz0CBAxKgWh7ianS9PRGQMkqwkzHyNTUPai6gWlYHMWPcmqE9_vUAMNPvKd1enadMxqtESb5Szxl9pH98ljYZRJDqFQQ95tOzI7hh5xssA0K4ucvMGKMqXL3MBXDukEX2o1VHKP01jzhqZw1CTKaMlTLHYShMcuwUMgeFE_nC7kwj7AlUq8yTXy1N2ltPrlvONova6aPmJewYpNX2YE-Fwi20fEk9HgvdoMKYBVDqDO1eh7N547AckY2tSsXj48sXky0oV7Q2uLB5uPBGPRdYiQNkDgu8xO2F8MGB4AxURce5bhKFDws",
              "Cache-Control": "no-cache",
              "Postman-Token": "b24cd144-c840-4e0b-ba9a-c758e349d7c4"
            },
            "processData": false,
            "data": "{\n    \"name\": \""+$("#device-name").val()+"\",\n    \"imei\": \""+$("#device-imei").val()+"\",\n    \"type\": 1\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            that.addNewDeviceSuccess();
          });
    }

    addNewDeviceSuccess(){
        this.setState({notice: "success!", noticeColor: "green"});
        this.props.rootParent.onGetListDevice();
    }

    addNewDeviceFailed() {
        this.setState({notice: "failed, name or imei already exists!", noticeColor: "red"});
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
                        <div className="form-heading">Add new device<span className="glyphicon glyphicon-remove" onClick={this.onCloseDialogClick} ></span></div>
                        <div className="form-content">
                            <input id="device-name" type="text" name="device-name" placeholder="Device Name"/><br/>
                            <input id="device-imei" type="text" name="device-imei" placeholder="IMEI"/><br/>
                            
                        </div><hr/>

                        <input type="file"></input>
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

export default DialogAddDevice;