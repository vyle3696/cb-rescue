import React from 'react';
import $ from "jquery";
import axios, { post } from 'axios';
import './Login.css';



class Login extends React.Component{

	constructor(props){
        super(props);
		this.state = {
			notice: ""
		}

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.loginHandle = this.loginHandle.bind(this);
		this.onLoginClick = this.onLoginClick.bind(this);
		
		this.loginSuccess = this.loginSuccess.bind(this);
		this.loginFailed = this.loginFailed.bind(this);

		this.loginHandle1 = this.loginHandle1.bind(this);
    }


    onLoginClick(){
        if($("#user").val() != "vyle3696@gmail.com" || $("#password").val() != "12345"){
			this.loginFailed();

		}else{
			this.loginSuccess();
		}

        //this.onLoginSubmit();
    }

    loginSuccess(){
		// this.setState({notice:  ""});
		// window.location.assign(window.location.origin);
		// this.props.root.setState({route: ""});

		this.loginHandle1();

		//this.onLoginSubmit();
	}
	
	loginHandle1(){
		var form = new FormData();
		form.append("grant_type", "password");
		form.append("client_id", "2");
		form.append("client_secret", "th6KLk1fPiTCqeue9BOBeGbd6qgwUcZ2WH9RNyf2");
		form.append("username", "vyle3696@gmail.com");
		form.append("password", "123456");
		form.append("scope", "");

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "http://cbrescue-dev-server.sugadev.top:9080/oauth/token",
			"method": "POST",
			"headers": {
				
				"Cache-Control": "no-cache",
				"Postman-Token": "3fb6e37b-b97e-434b-b113-a48455e6d5b0"
			},
			"processData": false,
			"contentType": false,
			"mimeType": "multipart/form-data",
			"data": form
			}

			$.ajax(settings).done(function (response) {
				let data = JSON.parse(response);
				console.log(data);
				localStorage.CBRescueUserToken = data.access_token;
			});
	}

    loginFailed(){
        this.setState({notice:  "user name or password is incorrect"});
    }

	onLoginSubmit(){
		this.loginHandle()
		.then((response)=>{
			console.log("success");
		});
	}


	

	loginHandle(){
		var url = 'http://cbrescue-dev-server.sugadev.top:9080/oauth/token';
		
		var form = new FormData();
		form.append("grant_type", "password");
		form.append("client_id", "2");
		form.append("client_secret", "th6KLk1fPiTCqeue9BOBeGbd6qgwUcZ2WH9RNyf2");
		form.append("username", "vyle3696@gmail.com");
		form.append("password", "123456");
		form.append("scope", "");
	   
		const config = {
	        headers: {
				"Content-Type": "application/json",
				"Cache-Control": "no-cache",
				"Postman-Token": "3fb6e37b-b97e-434b-b113-a48455e6d5b0"
					},	
	    }
	    return post(url,form,config);
    }
    

	render(){
		return(
			<div className="login-page">
				<div className="row login-page-inner">
					<div className="login-form  col-xs-12	col-sm-6	col-md-4">
			    	<img src={"http://sugastudio.com/assets/img/suga-logo.png"} alt="home-logo"/>
			      <div id="login-content" className="content">
			        <input id="user" type="text" name="user" placeholder="User"/><br/>
			        <input id="password" type="password" name="pass" placeholder="Password"/><br/>
			        <input id="submit" type="button" value="LogIn" onClick={this.onLoginClick}/>
			      </div>
			      <p id="notice">{this.state.notice}</p>
			    </div>
				</div>
			</div>
		);
	}
}
//

export default Login;
