import React from 'react';
import "./DialogAddDevice.css";

class DiaLogAddDevice extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="dialog-container">
                <div className="dialog-overlay"></div>
                <div className="dialog-inner">
                    <div className="dialog-form">
                        <div className="form-heading">Add new device</div>
                        <div className="form-content">
                            <input id="device-name" type="text" name="device-name" placeholder="Device Name"/><br/>
                            <input id="device-imei" type="text" name="device-imei" placeholder="IMEI"/><br/>
                            <input id="submit" type="button" value="Add" onClick={this.props.onSubmit}/>
                        </div>
                        <div className="form-footer"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DiaLogAddDevice;