import React from 'react';
import './Nav.css';


class Nav extends React.Component {
    render(){
        return(
            <div className="nav-container">
                <div className="nav-container-inner">
                    <div className="nav-menu">
                        <div className="nav-menu-item">
                            <div className="item-header">List Device</div>
                            <div className="item-content">
                                <p id="list-device"><i className="fa fa-list-ul"></i>List Device</p>
                                <p onClick={this.props.onAddDeviceClick}><i className="fa fa-plus-square"></i>Add Device</p>
                            </div>
                        </div>
                        <div className="nav-menu-item">
                            <div className="item-header">Map</div>
                            <div className="item-content">
                                <p><i className="fa fa-map-o"></i>Show Map</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;