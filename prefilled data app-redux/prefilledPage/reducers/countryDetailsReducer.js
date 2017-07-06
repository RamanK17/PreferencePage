export default function reducer(state = {                                   
    countryDetails: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    // console.log("action checkingg------", action, "checking state++++++++", state);
    switch (action.type) {
        case "FETCH_COUNTRIES_DETAILS":
            {
                return {...state, fetching: true }
            }
        case "FETCH_COUNTRIES_DETAILS_REJECTED":
            {
                return {...state, fetching: false, error: action.payload }

            }
        case "FETCH_COUNTRIES_DETAILS_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    countryDetails: action.payload,
                }
            }
    }
    return state
}
