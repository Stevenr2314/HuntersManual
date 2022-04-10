import axios from "axios";

export const GET_WEAPONS_START = 'GET_WEAPONS_START';
export const GET_WEAPONS_SUCCESS = 'GET_WEAPONS_SUCCESS';
export const GET_WEAPONS_FAILURE = 'GET_WEAPONS_FAILURE';
export const SELECT_WEAPON = 'SELECT_WEAPON';
export const GET_WEAPON_START = 'GET_WEAPON_START';
export const GET_WEAPON_SUCCESS = 'GET_WEAPON_SUCCESS';
export const GET_WEAPON_FAILURE = 'GET_WEAPON_FAILURE';

export const getWeapons = () => dispatch =>{
    dispatch({ type: GET_WEAPONS_START});
    axios.get('https://mhw-db.com/weapons')
        .then(res => {
            dispatch({ type: GET_WEAPONS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_WEAPONS_FAILURE, payload: err})
        })
}

export const selectWEAPONS = weapon => {
    return ({ type: SELECT_WEAPON , payload: weapon});
}

export const getWeapon = (id) => dispatch => {
    dispatch({type: GET_WEAPON_START});
    axios.get(`https://mhw-db.com/weapons/${id}`)
        .then(res => {
            dispatch({ type: GET_WEAPON_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_WEAPON_FAILURE, payload: err})
        })
}