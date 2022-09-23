import axios from 'axios'
import {GET_PRODUCTS, PRODUCTS_LOADING} from '../type.js'

export const getProducts = () => (dispatch) =>{
    axios.get("https://reqres.in/api/users/")
    .then((res)=>{
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.data
        })
        console.log(res.data);
    })
    .catch((err)=>{
        console.log('error');
    })
}