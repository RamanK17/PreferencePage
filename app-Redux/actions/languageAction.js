import axios from "axios";

export function fetchLanguageDetails() {
  return function(dispatch) {
    dispatch({type: "FETCH_LANGUAGE_DETAILS"});
   console.log("==================================");
    axios({
      method:'POST',
      url:'https://c4tneplantest.azure-api.net/platform/platform/languages',
      data:{
          "key": "9d8d5b316dbae6a3c9faf18531ca34ce"
      },
      headers:{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':'a2fe1cf9de1348a2bb328fbebe01a4fa',
            'Ocp-Apim-Trace':'false'
      }
      })
      .then((response) => {
        dispatch({type: "FETCH_LANGUAGE_FULFILLED", payload: response.data.data})
        // console.log("response from timezone api",response.data.data.details);
      })
      .catch((err) => {
        dispatch({type: "FETCH_LANGUAGE_REJECTED", payload: err})
      })
      
     
  }
}
