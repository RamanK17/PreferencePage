import axios from "axios";

export function fetchUserDetails() {
  return function(dispatch) {
    dispatch({type: "FETCH_USER_DETAILS"});
   
    axios({
      method:'post',
      url:'https://c4tneplantest.azure-api.net/org/org/getUserDetailsBySubset',
      data :{
        "key":"9d8d5b316dbae6a3c9faf18531ca34ce",
        "Subset":'getUserDetails'
      },
      headers:{
        'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':'a2fe1cf9de1348a2bb328fbebe01a4fa',
            'Ocp-Apim-Trace':'false'

      }
      })
      .then((response) => {
        dispatch({type: "FETCH_USER_DETAILS_FULFILLED", payload: response.data.data})
        // console.log("response from api",response.data.data);
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_DETAILS_REJECTED", payload: err})
      })
      
     
  }
}
