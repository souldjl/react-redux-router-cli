import { GET_PAGE_INFO, SET_PAGE_INFO } from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PAGE_INFO:
            return {
                ...state
            };
        case SET_PAGE_INFO:
            return {
                ...action.value
            };
        default:
            return state;
    }
}