import {GET_PRODUCTS} from '../type'

const initialState = {
    products: []
}

export default function productReducer(state=initialState, action){
    // console.log('payload', action);
    if(action.type === GET_PRODUCTS){
        return {
            ...state,
            products: action.payload
        }
    }
    return state;
}