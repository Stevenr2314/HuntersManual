import { GET_LIST_FAILURE, GET_LIST_START, GET_LIST_SUCCESS} from "./listerActions"

const initialState = {
    list: [],
    listItem: {},
    isFetching: false
}
export const listReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_LIST_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_LIST_SUCCESS:
            return {
                ...state,
                error: '',
                list: action.payload,
                isFetching: false
            }
        case GET_LIST_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        default:
            return state
    }
}