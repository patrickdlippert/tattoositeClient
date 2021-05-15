import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchArtists = () => dispatch => {
    dispatch(artistsLoading());

    return fetch(baseUrl + 'artists')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(artists => dispatch(addArtists(artists)))
        .catch(error => dispatch(artistsFailed(error.message)));
};

export const artistsLoading = () => ({
    type: ActionTypes.ARTISTS_LOADING
});

export const artistsFailed = errMess => ({
    type: ActionTypes.ARTISTS_FAILED,
    payload: errMess
});

export const addArtists = artists => ({
    type: ActionTypes.ADD_ARTISTS,
    payload: artists
});


export const fetchGalleries = () => dispatch => {
    dispatch(galleriesLoading());

    return fetch(baseUrl + 'galleries')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(galleries => dispatch(addGalleries(galleries)))
        .catch(error => dispatch(galleriesFailed(error.message)));
};

export const galleriesLoading = () => ({
    type: ActionTypes.GALLERIES_LOADING
});

export const galleriesFailed = errMess => ({
    type: ActionTypes.GALLERIES_FAILED,
    payload: errMess
});

export const addGalleries = galleries => ({
    type: ActionTypes.ADD_GALLERIES,
    payload: galleries
});





export const fetchGalleryImages = () => dispatch => {
    dispatch(galleryimagesLoading());

    return fetch(baseUrl + 'galleryimages')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(galleryimages => dispatch(addGalleryimages(galleryimages)))
        .catch(error => dispatch(galleryimagesFailed(error.message)));
};

export const galleryimagesLoading = () => ({
    type: ActionTypes.GALLERYIMAGES_LOADING 
});

export const galleryimagesFailed = errMess => ({
    type: ActionTypes.GALLERYIMAGES_FAILED,
    payload: errMess
});

export const addGalleryimages = galleryimages => ({
    type: ActionTypes.ADD_GALLERYIMAGES,
    payload: galleryimages
});





export const fetchBillboards = () => dispatch => {
    dispatch(billboardsLoading());

    return fetch(baseUrl + 'billboards')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(billboards => dispatch(addBillboards(billboards)))
        .catch(error => dispatch(billboardsFailed(error.message)));
};

export const billboardsLoading = () => ({
    type: ActionTypes.BILLBOARDS_LOADING
});

export const billboardsFailed = errMess => ({
    type: ActionTypes.BILLBOARDS_FAILED,
    payload: errMess
});

export const addBillboards = billboards => ({
    type: ActionTypes.ADD_BILLBOARDS,
    payload: billboards
});


export const fetchReviews = () => dispatch => {
    dispatch(reviewsLoading());

    return fetch(baseUrl + 'reviews')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
};

export const reviewsLoading = () => ({
    type: ActionTypes.REVIEWS_LOADING
});

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});



export const fetchShopping = () => dispatch => {
    dispatch(shoppingLoading());

    return fetch(baseUrl + 'shopping')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(shopping => dispatch(addShopping(shopping)))
        .catch(error => dispatch(shoppingFailed(error.message)));
};

export const shoppingLoading = () => ({
    type: ActionTypes.SHOPPING_LOADING
});

export const shoppingFailed = errMess => ({
    type: ActionTypes.SHOPPING_FAILED,
    payload: errMess
});

export const addShopping = shopping => ({
    type: ActionTypes.ADD_SHOPPING,
    payload: shopping
});


export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});


export const fetchNews = () => dispatch => {
    dispatch(newsLoading());

    return fetch(baseUrl + 'news')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(news => dispatch(addNews(news)))
        .catch(error => dispatch(newsFailed(error.message)));
};

export const newsLoading = () => ({
    type: ActionTypes.NEWS_LOADING
});

export const newsFailed = errMess => ({
    type: ActionTypes.NEWS_FAILED,
    payload: errMess
});

export const addNews = news => ({
    type: ActionTypes.ADD_NEWS,
    payload: news
});



export const postMatchForm = (matchform) => dispatch => {

    return fetch(baseUrl + 'match', {
            method: "POST",
            body: JSON.stringify(matchform),
            headers: { 
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if(response.ok) {
                    //alert('You have been matched with an artist\n ' + JSON.stringify(matchform)); 
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addMatches(response)))
        .catch(error => {
            console.log('post match', error.message);
            alert('Your match form could not be posted\nError: ' + error.message);
        });
};

export const addMatches = matches => ({
    type: ActionTypes.ADD_MATCHES,
    payload: matches
});

export const postFeedback = feedback => () => {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(feedback),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }             
    )
    .then(response => response.json())
    .then(response => {
        console.log('Feedback:', response);
        //alert('Thank you for your feedback!\n' + JSON.stringify(response));
        alert('Thank you for your feedback!');
    })
    .catch(error => {
        console.log('Feedback:', error.message);
        alert('Your feedback could not be posted\nError: ' + error.message);
    });
};



export const requestLogin = creds => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = response => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = message => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = creds => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(receiveLogin(response));
        } else {
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
}


export const receiveCreate = response => {
    return {
        type: ActionTypes.CREATE_SUCCESS,
        token: response.token
    }
}
export const createError = message => {
    alert('Could not create an account with this username.');
    return {
        type: ActionTypes.CREATE_FAILURE,
        message
    }
}
// Create User Account
export const createUser = creds => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    //dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/signup', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            dispatch(receiveCreate(response));
        } else {
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(createError(error.message)))
};