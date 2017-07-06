export default function reducer(state = {   
    countryName:null,
    timeZone:null,
    language:null,
},action){
    console.log("++++++++++++++",state);
     switch (action.type) {
         case "FETCH_COUNTRY_NAMES":{
             return {
            ...state,
          countryName: action.payload, 
            }
         }
         case "FETCH_TIMEZONES":{
             return {
                 ...state,
               timeZone:action.payload,
             }
         }
         case "FETCH_LANGUAGES":{
             return{
                ...state,
                language:action.payload,
             }
         }
     }
      return state;
}