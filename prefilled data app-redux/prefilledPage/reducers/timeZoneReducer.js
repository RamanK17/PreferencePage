export default function reducer(state = {
    timeZoneDetails:[],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    console.log("Checking action payload in timeZoneDetails", state);
    // console.log("action checkingg------", action, "checking state++++++++", state);
    switch (action.type) {
        case "FETCH_TIMEZONE_DETAILS":
            {
                return {...state, fetching: true }
            }
        case "FETCH_TIMEZONE_REJECTED":
            {
                return {...state, fetching: false, error: action.payload }
            }
        case "FETCH_TIMEZONE_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    timeZoneDetails: action.payload,
                }
            }
    }

    return state
    
}
 