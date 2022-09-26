import {GET_PRODUCTS, PRODUCT_LOADING} from '../type'

const initialState = {
    products: [],
    loading: false,
}

export default function productReducer(state=initialState, action){
    // console.log('payload', action);
   if(action.type === GET_PRODUCTS){
        return {
            ...state,
            loading: false,
            products: [...state.products, ...action.payload]
        }
    }
    if(action.type === PRODUCT_LOADING){
        return {
            ...state,
            loading: true,
        }
    }

    return state;
}