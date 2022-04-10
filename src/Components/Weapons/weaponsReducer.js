import { GET_WEAPONS_FAILURE, GET_WEAPONS_START, GET_WEAPONS_SUCCESS, SELECT_WEAPON, GET_WEAPON_FAILURE, GET_WEAPON_START, GET_WEAPON_SUCCESS } from "./WeaponActions"

const initialState = {
    weapons: [],
    currentWEAPON: {},
    isFetching: false
}
export const weaponReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_WEAPONS_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_WEAPONS_SUCCESS:
            return {
                ...state,
                error: '',
                weapons: action.payload,
                isFetching: false
            }
        case GET_WEAPONS_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        case SELECT_WEAPON:
            return {
                ...state,
                currentWeapon: action.payload,
            }
        case GET_WEAPON_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_WEAPON_SUCCESS:
            return {
                ...state,
                error: '',
                currentWeapon: action.payload,
                isFetching: false
            }
        case GET_WEAPON_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        default:
            return state
    }
}