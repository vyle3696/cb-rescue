import React from 'react';
import $ from "jquery";
import './Nav.css';
import {
    BrowserRouter,
    Route,
    Link
    } from 'react-router-dom';


class Nav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
      };

      this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(e){
        $(".item-inner").removeClass("item-active");
        $(e.target).addClass("item-active");
    }
    render(){
        return(
            <div className="nav-container">
                <div className="nav-container-inner">
                    <div className="nav-menu">
                        <div className="nav-menu-item">
                            <div className="item-header">List Device</div>
                            <div className="item-content" >
                                <Link to="/"><p className="item-inner" id="list-device" onClick= {((e) => this.onMenuClick(e))}><i className="fa fa-list-ul"></i>List Device</p></Link>
                                <p onClick={this.props.onAddDeviceClick} ><i className="fa fa-plus-square"></i>Add Device</p>
                            </div>
                        </div>
                        <div className="nav-menu-item">
                            <div className="item-header">Map</div>
                            <div className="item-content">
                            <Link to="/map"><p className="item-inner" onClick= {((e) => this.onMenuClick(e))} id="show-map"><i className="fa fa-map-o"></i>Show Map</p></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
          
        );
    }
}

export default Nav;