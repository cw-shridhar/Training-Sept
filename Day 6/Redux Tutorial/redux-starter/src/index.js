import store from './store'
import * as actions from './actionTypes'
import {bugAdded, bugRemoved, bugResolved} from './actions'
// store.subscribe(()=>{
//     console.log("Store changed" , store.getState());
// })

store.dispatch(bugAdded("bug 1"))

// store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(1));

console.log(store.getState());