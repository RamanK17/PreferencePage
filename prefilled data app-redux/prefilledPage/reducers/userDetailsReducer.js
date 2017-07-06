export default function reducer(state = {
    userDetails: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_USER_DETAILS":
            {
                return {...state, fetching: true }
            }
        case "FETCH_USER_DETAILS_REJECTED":
            {
                return {...state, fetching: false, error: action.payload }
            }
        case "FETCH_USER_DETAILS_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    userDetails: action.payload,
                }
            }
    }
    return state
    
}
 