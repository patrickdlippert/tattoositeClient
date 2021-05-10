import * as ActionTypes from './ActionTypes';

export const GalleryImages = (state = {
        isLoading: true,
        errMess: null,
        galleryimages: []
    }, action) => {  
    switch (action.type) {
        case ActionTypes.ADD_GALLERYIMAGES:
            return {...state, isLoading: false, errMess: null, galleryimages: action.payload};
        case ActionTypes.GALLERYIMAGES_LOADING:
            return {...state, isLoading: true, errMess: null, galleryimages: []};
        case ActionTypes.GALLERYIMAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default: 
            return state;
    }
};