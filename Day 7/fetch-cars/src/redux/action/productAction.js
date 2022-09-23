import axios from 'axios'
import * as actions from '../type'

export const getProducts = () => (dispatch) => {

    axios.get('https://reqres.in/api/users/').then((res)=>{
        dispatch({
            type: actions.GET_PRODUCTS,
            payload: res.data.data
        })
    })

    // let products = []
    // axios.get('https://reqres.in/api/users/')
    // .then((res)=>{
    //     console.log(res);
    // })
    console.log('hey');
    // console.log('heyhey', products);

    // let result =  fetch("https://reqres.in/api/users/").then((res) => res.json());
    // console.log('result', result.data);
    // return {
    //     type: actions.GET_PRODUCTS,
    //     payload: result
    // }
}