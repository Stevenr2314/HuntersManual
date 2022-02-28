import { GET_MONSTERS_FAILURE, GET_MONSTERS_START, GET_MONSTERS_SUCCESS } from "../Actions/MonsterActions"

const initialState = {
    monsters: [],
    currentMonster: {},
    isFetching: false
}
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_MONSTERS_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_MONSTERS_SUCCESS:
            return {
                ...state,
                error: '',
                monsters: action.payload,
                isFetching: false
            }
        case GET_MONSTERS_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        default:
            return state
    }
}