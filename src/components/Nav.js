import React from 'react';
import './Nav.css';
import {
    BrowserRouter,
    Route,
    Link
    } from 'react-router-dom';


class Nav extends React.Component {
    render(){
        return(
            <div className="nav-container">
                <div className="nav-container-inner">
                    <div className="nav-menu">
                        <div className="nav-menu-item">
                            <div className="item-header">List Device</div>
                            <div className="item-content">
                                <Link to="/"><p id="list-device"><i className="fa fa-list-ul"></i>List Device</p></Link>
                                <p onClick={this.props.onAddDeviceClick}><i className="fa fa-plus-square"></i>Add Device</p>
                            </div>
                        </div>
                        <div className="nav-menu-item">
                            <div className="item-header">Map</div>
                            <div className="item-content">
                            <Link to="/map"><p><i className="fa fa-map-o"></i>Show Map</p></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
          
        );
    }
}

export default Nav;