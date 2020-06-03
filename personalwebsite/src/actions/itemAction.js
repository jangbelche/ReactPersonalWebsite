import { GET_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios';

// export const getItems = () => {
//     return {
//         type: GET_ITEMS,
//         payload:  [
//             {
//                 title: "lol"
//             }
//         ]
//     };
// }
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:5000/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    );
};

export const setItemsLoading = () =>{
    return{
        type: ITEMS_LOADING
    }
}