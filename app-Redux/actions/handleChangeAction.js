export function handleChangeCountry(country){
    return function(dispatch){
         dispatch({type: "FETCH_COUNTRY_NAMES", payload:country});
       
    }
}
export function handleChangeTimeZone(zone){
    console.log("printing====",zone)
    return function(dispatch){
         dispatch({type: "FETCH_TIMEZONES", payload:zone});
    }
}
export function handleChangeLanguage(lang){
    console.log("printing====",lang)
    return function(dispatch){
         dispatch({type: "FETCH_LANGUAGES", payload:lang});
    }
}