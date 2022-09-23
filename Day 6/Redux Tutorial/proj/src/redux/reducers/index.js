import {combineReducers} from 'redux'
import reducer from './reducer.js'

const mainReducer = combineReducers({
    product: reducer
});

export default mainReducer;