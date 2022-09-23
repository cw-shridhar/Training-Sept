import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from './actionTypes'
let lastId = 0;
// reducer is a function with 2 parameters: state and action
export default function reducer(state=[], action){
    if(action.type === BUG_ADDED){
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    }
    else if(action.type === BUG_REMOVED)
        return state.filter(bug => bug.id !== action.payload.id)
    else if(action.type === BUG_RESOLVED){
        return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true })
    }
    return state;

}