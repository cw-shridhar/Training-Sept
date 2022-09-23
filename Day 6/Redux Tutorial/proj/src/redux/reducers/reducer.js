import {GET_PRODUCTS, PRODUCTS_LOADING} from '../type.js'

const initialState={
    products: [],
    loading: false
};

export default function(state = initialState, action){
    if(action.type === PRODUCTS_LOADING){
        return{
            ...state,
            loading: true
        }
    }
    else if(action.type === GET_PRODUCTS){
        return {
            ...state,
            loading: false,
            products: action.payload
        }
    }
    return state;
}