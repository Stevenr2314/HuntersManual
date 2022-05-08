import { GET_LIST_FAILURE, GET_LIST_START, GET_LIST_SUCCESS, GET_LISTITEM_FAILURE, GET_LISTITEM_START, GET_LISTITEM_SUCCESS, CLEAR_LIST} from "./listerActions"

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
        case GET_LISTITEM_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_LISTITEM_SUCCESS:
            return {
                ...state,
                error: '',
                listItem: action.payload,
                isFetching: false
            }
        case GET_LISTITEM_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        case CLEAR_LIST:
            return {
                ...state,
                list: []
            }
        default:
            return state
    }
}