
import axios, { get, post } from 'axios';
import $ from "jquery";
export var API = {
    getListDevice(){
        var url = 'http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices?page=1&limit=10&sort=id&dir=asc&status=1';
       
        const config = {
            headers: {
                "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.CBRescueUserToken,
              "Cache-Control": "no-cache",
              "Postman-Token": "93c0a0c9-3d20-44da-896c-16d42ca0617d"
                    },	
        }
        return axios.get(url,config);
    },


    addNewDevice(){
        let data = {

        }

        var url = 'http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices';
       
        const config = {
            headers: {
                async: true,
                crossDomain: true,
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.CBRescueUserToken,
                "Cache-Control": "no-cache",
                "Postman-Token": "d3f2dc85-23f0-4706-afb8-ee0eff3ecdb6"
                },
                processDat: false,
                "data": "{\n    \"name\": \""+$("#device-name").val()+"\",\n    \"imei\": \""+$("#device-imei").val()+"\",\n    \"type\": 1\n}"
                	
        }
        return get(url,config);
    },

    removeDevice(idDevice){
        console.log(idDevice);

        var url = 'http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices/' + idDevice;
       
        const config = {
            headers: {
                async: true,
                crossDomain: true,
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.CBRescueUserToken,
                "Cache-Control": "no-cache",
                "Postman-Token": "f274d646-c8ba-47a5-a3c4-10207fae04ac"
                }  	
        }
        return axios.delete(url,config);
    },

    getDeviceDetail(idDevice){

        var url = 'http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices/' + idDevice;
       
        const config = {
            headers: {
                async: true,
                crossDomain: true,
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.CBRescueUserToken,
                "Cache-Control": "no-cache",
                "Postman-Token": "47e62cf9-9067-4a8f-b2d4-c1eef7f86f40"
                }  	
        }
        return axios.get(url,config);
    }

    
}
