import axios from "axios";

export const GET_LIST_START = 'GET_LIST_START';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'GET_LIST_FAILURE';


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
