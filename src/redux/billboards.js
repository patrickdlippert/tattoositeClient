import * as ActionTypes from './ActionTypes';

export const Billboards = (state ={ isLoading: true,
                                        errMess: null,
                                        billboards: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BILLBOARDS:
            return {...state, isLoading: false, errMess: null, billboards: action.payload};
        case ActionTypes.BILLBOARDS_LOADING:
            return {...state, isLoading: true, errMess: null, billboards: []};
        case ActionTypes.BILLBOARDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default: 
            return state;
    }
};