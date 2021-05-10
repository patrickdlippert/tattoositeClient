import * as ActionTypes from './ActionTypes';

export const Shopping = (state ={ isLoading: true,
                                        errMess: null,
                                        shopping: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SHOPPING:
            return {...state, isLoading: false, errMess: null, shopping: action.payload};
        case ActionTypes.SHOPPING_LOADING:
            return {...state, isLoading: true, errMess: null, shopping: []};
        case ActionTypes.SHOPPING_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default: 
            return state;
    }
};