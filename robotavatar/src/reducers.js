import {
    CHANGE_BUTTON_STATE,
    CHANGE_SEARCH_FIELD,
    DATA_REQUEST_PENDING,
    DATA_REQUEST_SUCCESS,
    DATA_REQUEST_FAILED
} from './constants'

const initialInputState = {
    input: '',
    button: false
}

export const sendData = (state=initialInputState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD: 
        return Object.assign({}, state, {input:action.payload, button:action.payload2});
        default:
            return state;
    }
}


const initialData = {
    isPending: false,
    data: {},
    error: ''

}

export const requestData = (state=initialData, action={}) => {
    switch(action.type){
        case DATA_REQUEST_PENDING:
            return Object.assign({}, state, {isPending: true})
        case DATA_REQUEST_SUCCESS:
            return Object.assign({}, state, {data: action.payload, isPending: false})
        case DATA_REQUEST_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false})
            default:
                return state;
    }
}
