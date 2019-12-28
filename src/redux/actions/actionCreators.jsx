import { SET_PAGE_INFO } from './actionTypes';
import  * as http from '../../util/http';


export const setPageInfo = (data) => ({
    type: SET_PAGE_INFO,
    value: data
});

export const getPageInfo = (id) => {
    return (dispatch) => {
        http.Get('../pageConf.json', {id})
            .then((res) => {
                const action = setPageInfo(res);
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            });
    }
};