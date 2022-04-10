import { GET_ITEMS_FAILURE, GET_ITEMS_START, GET_ITEMS_SUCCESS, SELECT_ITEM, GET_ITEM_FAILURE, GET_ITEM_START, GET_ITEM_SUCCESS } from "./ItemActions"

const initialState = {
    items: [],
    currentItem: {},
    isFetching: false
}
export const itemReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ITEMS_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                error: '',
                items: action.payload,
                isFetching: false
            }
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        case SELECT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        case GET_ITEM_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_ITEM_SUCCESS:
            return {
                ...state,
                error: '',
                currentItem: action.payload,
                isFetching: false
            }
        case GET_ITEM_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        default:
            return state
    }
}