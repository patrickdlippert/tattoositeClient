import * as ActionTypes from './ActionTypes';

export const Galleries = (state = {
        isLoading: true,
        errMess: null,
        galleries: []
    }, action) => {  
    switch (action.type) {
        case ActionTypes.ADD_GALLERIES:
            return {...state, isLoading: false, errMess: null, galleries: action.payload};
        case ActionTypes.GALLERIES_LOADING:
            return {...state, isLoading: true, errMess: null, galleries: []};
        case ActionTypes.GALLERIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default: 
            return state;
    }
};