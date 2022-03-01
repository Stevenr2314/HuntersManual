import axios from "axios";

export const GET_MONSTERS_START = 'GET_MONSTERS_START';
export const GET_MONSTERS_SUCCESS = 'GET_MONSTERS_SUCCESS';
export const GET_MONSTERS_FAILURE = 'GET_MONSTERS_FAILURE';
export const SELECT_MONSTER = 'SELECT_MONSTER';
export const GET_MONSTER_START = 'GET_MONSTER_START';
export const GET_MONSTER_SUCCESS = 'GET_MONSTER_SUCCESS';
export const GET_MONSTER_FAILURE = 'GET_MONSTER_FAILURE';


export const getMonsters = () => dispatch =>{
    dispatch({ type: GET_MONSTERS_START});
    axios.get('https://mhw-db.com/monsters')
        .then(res => {
            dispatch({ type: GET_MONSTERS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_MONSTERS_FAILURE, payload: err})
        })
}

export const selectMonster = monster => {
    return ({ type: SELECT_MONSTER , payload: monster});
}

export const getMonster = (id) => dispatch => {
    dispatch({type: GET_MONSTER_START});
    axios.get(`https://mhw-db.com/monsters/${id}`)
        .then(res => {
            dispatch({ type: GET_MONSTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_MONSTER_FAILURE, payload: err})
        })
}