import axios from "axios";

export const GET_MONSTERS_START = 'GET_MONSTERS_START';
export const GET_MONSTERS_SUCCESS = 'GET_MONSTERS_SUCCESS';
export const GET_MONSTERS_FAILURE = 'GET_MONSTERS_FAILURE';


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