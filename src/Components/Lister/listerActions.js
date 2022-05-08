import axios from "axios";

export const GET_LIST_START = 'GET_LIST_START';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'GET_LIST_FAILURE';
export const GET_LISTITEM_START = 'GET_LISTITEM_START';
export const GET_LISTITEM_SUCCESS = 'GET_LISTITEM_SUCCESS';
export const GET_LISTITEM_FAILURE = 'GET_LISTITEM_FAILURE';


export const getList = (pathname) => dispatch =>{
    dispatch({ type: GET_LIST_START});
    axios.get(`https://mhw-db.com${pathname}`)
        .then(res => {
            dispatch({ type: GET_LIST_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_LIST_FAILURE, payload: err})
        })
}

export const getListItem = (pathname, id) => dispatch =>{
    dispatch({ type: GET_LISTITEM_START});
    axios.get(`https://mhw-db.com${pathname}/${id}`)
        .then(res => {
            dispatch({ type: GET_LISTITEM_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_LISTITEM_FAILURE, payload: err})
        })
}
