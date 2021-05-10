import * as ActionTypes from './ActionTypes';

export const Matches = (state ={ isLoading: true,
                                        errMess: null,
                                        matches: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MATCHES:
            //alert(action.payload[0].artist.name);
            return {...state, isLoading: false, errMess: null, matches: action.payload};
        case ActionTypes.MATCHES_LOADING:
            return {...state, isLoading: true, errMess: null, matches: []};
        case ActionTypes.MATCHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default: 
            return state;
    }
};