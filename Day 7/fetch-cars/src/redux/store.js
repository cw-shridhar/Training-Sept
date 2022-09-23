import {legacy_createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer/index'
import thunk from 'redux-thunk'
// const store = createStore(reducer)

const initialState = {};
const middleware = [thunk];

const store = legacy_createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
    )
)

export default store;