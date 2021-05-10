import * as ActionTypes from './ActionTypes';

export const Artists = (state = {
        isLoading: true,
        errMess: null,
        artists: []
    }, action) => {  
    switch (action.type) {
        case ActionTypes.ADD_ARTISTS:
            return {...state, isLoading: false, errMess: null, artists: action.payload};
        case ActionTypes.ARTISTS_LOADING:
            return {...state, isLoading: true, errMess: null, artists: []};
        case ActionTypes.ARTISTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default: 
            return state;
    }
};