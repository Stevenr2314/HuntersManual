import axios from "axios";

export const GET_ITEMS_START = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const SELECT_ITEM = 'SELECT_ITEM';
export const GET_ITEM_START = 'GET_ITEM_START';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const getItems = () => dispatch =>{
    dispatch({ type: GET_ITEMS_START});
    axios.get('https://mhw-db.com/items')
        .then(res => {
            dispatch({ type: GET_ITEMS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_ITEMS_FAILURE, payload: err})
        })
}

export const selectItems = item => {
    return ({ type: SELECT_ITEM , payload: item});
}

export const getItem = (id) => dispatch => {
    dispatch({type: GET_ITEM_START});
    axios.get(`https://mhw-db.com/items/${id}`)
        .then(res => {
            dispatch({ type: GET_ITEM_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_ITEM_FAILURE, payload: err})
        })
}