import React from 'react';
import {API} from '../services/API';

class DeviceDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deviceDetail: {}
      };

      this.onGetDeviceDetail = this.onGetDeviceDetail.bind(this);

        this.onGetDeviceDetail();
    }
    
    onGetDeviceDetail(){
        let that = this;
		API.getDeviceDetail(that.props.match.params.id)
		.then((response)=>{
            that.setState({deviceDetail: response.data});
		});
	}

    render(){
        if(!this.state.deviceDetail.id){
            return(
                <h1>device detail is not available</h1>
            );
        }else{
            return(
                <div>{this.state.deviceDetail.id}</div>
            );
        }
        
    }
}

export default DeviceDetail;