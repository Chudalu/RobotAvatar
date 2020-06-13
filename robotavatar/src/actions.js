import {
    CHANGE_BUTTON_STATE,
    CHANGE_SEARCH_FIELD,
    DATA_REQUEST_PENDING,
    DATA_REQUEST_SUCCESS,
    DATA_REQUEST_FAILED
} from './constants'

export const setInput = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
    payload2: false
})




export const requestData = (fullname) => (dispatch) => {
    dispatch({type: DATA_REQUEST_PENDING});
    fetch(`https://api.diversitydata.io/?fullname=${fullname}`)
    .then(response => response.json())
    .then(data => dispatch({type: DATA_REQUEST_SUCCESS, payload: data}))
    .catch(error => dispatch({type: DATA_REQUEST_FAILED, payload: error}))
}