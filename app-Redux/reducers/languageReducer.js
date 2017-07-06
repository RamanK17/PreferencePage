export default function reducer(state = {
    languageDetails: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    console.log("Checking action payload in language Detaisl", state.languageDetails);
    switch (action.type) {
        case "FETCH_LANGUAGE_DETAILS":
            {
                return {...state, fetching: true }
            }
        case "FETCH_LANGUAGE_REJECTED":
            {
                return {...state, fetching: false, error: action.payload }
            }
        case "FETCH_LANGUAGE_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    languageDetails: action.payload,
                }
            }
    }
    return state
    
}
 