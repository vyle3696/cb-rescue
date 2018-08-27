import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import {API} from '../services/API'; 
import ItemDevice from './ItemDevice';

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    listDevice: [],
   
    };

    componentDidMount(){
    }
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render() {
    
    return (
        <div className="map-view" style={{width: '100%', height: '100%', position: 'relative'}}>
            <Map
                style={{width: '100%', height: '100%', position: 'relative'}}
                google={this.props.google}
                initialCenter={{
                    lat: 10.799455,
                    lng: 106.673024
                }}> 


                {this.props.listDevice.map((item, index)=>(
                    <Marker 
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: item.latitude, lng: item.longitude}} />
                ))}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                        <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                </InfoWindow>
            </Map>

    </div>
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCl_thtuSPjbSzMgtzWYMUDxEHRCj466QE")
})(MapContainer)


