
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

        var url = 'http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices';
       
        let data = {
            name : $("#device-name").val(),
            imei: $("#device-imei").val(),
            type: 1
        }


        const config = {
            headers: {
                async: true,
                crossDomain: true,
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.CBRescueUserToken,
                "Cache-Control": "no-cache",
                "Postman-Token": "b24cd144-c840-4e0b-ba9a-c758e349d7c4"
                }
                	
        }
        return post(url,data,config);
    },

    editDevice(idDevice){

        var url = "http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/devices/" + idDevice;
       
        const config = {
            headers: {
                async: true,
                crossDomain: true,
                "Content-Type": "application/json",
              "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhMDEyNTgxODZhYjBiNTU3OWQzZTE0MWQ2YTU4ZjhkYWFlZGFkNzkwNGMzZjk1N2JiZGZlYmJhNDdmODU2MWJjZmVkNDZjYzM3ZjA2NzY4In0.eyJhdWQiOiIyIiwianRpIjoiMmEwMTI1ODE4NmFiMGI1NTc5ZDNlMTQxZDZhNThmOGRhYWVkYWQ3OTA0YzNmOTU3YmJkZmViYmE0N2Y4NTYxYmNmZWQ0NmNjMzdmMDY3NjgiLCJpYXQiOjE1MzUxNzI3MjMsIm5iZiI6MTUzNTE3MjcyMywiZXhwIjoxNTY2NzA4NzIzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.FOGf7AvP8PtSITgTMFQDV-O06XwHQz6IPbaGCDeDivodPLB5kf0sHLPfEv-7ejzYlieKHTW_WL7qH76vPpxZ5FwVBCJqbPgG22NSS9qS__Xi32zfBpG-0de5AlvbN7tTypVdGWCnBX9BXEUlbZ_dRtuF3efEflqDqxhHtm4gNUTgU7KyzjoIGOGZeFolutFYvMVPtn8lLwWo5YXx_jFshkc3A1EFBkkOwqnQnHlUtyNc3QGD3Jd0W382mwW1ETin22IRBTDRxSqtnfBpiMCwafTrLR43rJUqGsGN6AozLn3noASgU15dY_tlKsxOA8m-ccJV930B3ELhZrNc2AfaCvmbQxUnEK5delIOhgNkRrFK5pyOxlL_mINEz0CBAxKgWh7ianS9PRGQMkqwkzHyNTUPai6gWlYHMWPcmqE9_vUAMNPvKd1enadMxqtESb5Szxl9pH98ljYZRJDqFQQ95tOzI7hh5xssA0K4ucvMGKMqXL3MBXDukEX2o1VHKP01jzhqZw1CTKaMlTLHYShMcuwUMgeFE_nC7kwj7AlUq8yTXy1N2ltPrlvONova6aPmJewYpNX2YE-Fwi20fEk9HgvdoMKYBVDqDO1eh7N547AckY2tSsXj48sXky0oV7Q2uLB5uPBGPRdYiQNkDgu8xO2F8MGB4AxURce5bhKFDws",
              "Cache-Control": "no-cache",
              "Postman-Token": "ae415f43-d101-4da4-ad63-1d26c90a2581"
                },
                processData: false,
                data: "{\n    \"name\": \""+$("#device-name-edit").val()+"\"\n}"
                	
        }
        return axios.put(url,config);
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
                "Postman-Token": "bc982086-24ee-4e13-afef-62757dfe9bb6"
                }  	
        }
        return axios.get(url,config);
    },

    getAuth(){
        var url = "http://cbrescue-dev-server.sugadev.top:9080/api/backend/v1/echo/auth";
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.CBRescueUserToken
                    }        
            }
            return post(url,{},config);
    }

    
}
