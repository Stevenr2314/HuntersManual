import { GET_MONSTERS_FAILURE, GET_MONSTERS_START, GET_MONSTERS_SUCCESS, SELECT_MONSTER, GET_MONSTER_FAILURE, GET_MONSTER_START, GET_MONSTER_SUCCESS } from "./MonsterActions"

const initialState = {
    monsters: [],
    currentMonster: {},
    isFetching: false
}
export const monsterReducer = (state = initialState, action) => {
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
        case SELECT_MONSTER:
            return {
                ...state,
                currentMonster: action.payload,
            }
        case GET_MONSTER_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_MONSTER_SUCCESS:
            return {
                ...state,
                error: '',
                currentMonster: action.payload,
                isFetching: false
            }
        case GET_MONSTER_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        default:
            return state
    }
}