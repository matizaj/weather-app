import {FETCH_WEATHER } from '../actions/types';

export default (state=[], action)=> {
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload, ...state]
        default: 
            return state;
    }
}