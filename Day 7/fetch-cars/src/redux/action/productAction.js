import axios from 'axios'
import * as actions from '../type'

export const getProducts = (pageNumber) => (dispatch) => {
    dispatch(setLoading())
    axios.get(`https://reqres.in/api/users/?page=${pageNumber}`).then((res)=>{
        // console.log(`page ${pageNumber}`, res.data.data);
        dispatch({
            type: actions.GET_PRODUCTS,
            payload: res.data.data
        })
        // console.log('data : ', res.data.data);
    })
    .catch((e)=>{
        console.log('e');
        dispatch({
            type: actions.GET_PRODUCTS,
            payload: null
        })
    })

    // console.log('page change');
    
}

export const setLoading = ()=>{
    return {
        type: actions.PRODUCT_LOADING,
    }
}