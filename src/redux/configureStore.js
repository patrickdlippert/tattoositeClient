import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Artists } from './artists';
import { Galleries } from './galleries';
import { GalleryImages } from './galleryimages';
import { Matches } from './matches';
import { Shopping } from './shopping';
import { Reviews } from './reviews';
import { Billboards } from './billboards';
import { Promotions } from './promotions';
import { InitialLogin, InitialAccount, InitialFeedback, InitialMatch } from './forms';
import { News } from './news';
import { Auth } from './auth';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            artists: Artists,
            galleries: Galleries,
            galleryimages: GalleryImages,
            matches: Matches,
            reviews: Reviews,
            shopping: Shopping,
            billboards: Billboards,
            promotions: Promotions,
            news: News,
            auth: Auth,
            ...createForms({
                feedbackForm: InitialFeedback,
                matchForm: InitialMatch,
                loginForm: InitialLogin,
                accountForm: InitialAccount
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}