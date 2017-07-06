import axios from "axios";

export function fetchTimeZoneDetails() {
  return function(dispatch) {
    dispatch({type: "FETCH_TIMEZONE_DETAILS"});
   
    axios({
      method:'GET',
      url:'https://c4tneplantest.azure-api.net/platform/platform/timeZones',
      headers:{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':'a2fe1cf9de1348a2bb328fbebe01a4fa',
            'Ocp-Apim-Trace':'false',
      }
      })
      .then((response) => {
        dispatch({type: "FETCH_TIMEZONE_FULFILLED", payload: response.data.data.details})
        // console.log("response from timezone api",response.data.data.details);
      })
      .catch((err) => {
        dispatch({type: "FETCH_TIMEZONE_REJECTED", payload: err})
      })
      
     
  }
}
