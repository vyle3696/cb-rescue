import React from 'react';

import Home from './Home';
import Login from './Login';

import './Main.css';


class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            route : window.location.pathname,
        };

        this.log = this.log.bind(this);
        this.log();
    }

    componentWillMount(){

    }

    log(){
        if(!localStorage.CBRescueUserToken){
	    	
	    	//window.location.assign(window.location.origin + "/login");
	    	//this.setState({route: "/login"});
	    	
	    }
        console.log("success");
    }
    render(){
        var Content;
        switch(this.state.route){
            case "/login" : Content = <Login root = {this}/> ;break;
            default: Content = <Home root = {this}/>; break;
        }
        return(
            <div>
                {Content}
            </div>
        );
    }
}

export default Main;