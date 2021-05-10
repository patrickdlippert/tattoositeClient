import React from 'react';

// This component returns a group of 5 fontawesome star icons given a rating value from 1-5
// If a fraction is provided, it's rounded to the nearest 0.5 so that a half star
// is displayed.


function RenderStars({rating}) {
        let content = [];
        let roundedRating = Math.round(rating*2)/2; //Round to nearest 0.5
        let remainder = roundedRating;
        for (let i=1; i <= 5; i++) {
            remainder -= 1;
            if (remainder === -0.5) {
                content.push(<i key={i} className="fas fa-star-half-alt amber-text" />); 
            } 
            else if (i <= roundedRating) {
                content.push(<i key={i} className="fas fa-star amber-text" />);
            }
            else {
                content.push(<i key={i} className="far fa-star amber-text" />);
            }
            
        }
        return content;
}


 

function RatingStars(props) {
    if(props.rating) {
        return(
            <span>
                <RenderStars rating={props.rating} />
            </span>
        );
    }
    else {
        return(
            <span />
        );
    }
}

export default RatingStars;