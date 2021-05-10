import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';


function RenderArtistItem({category, artist}) {
    // Get the last character from the artist's ObjectID and use it to alternate even and odd
    // artist profiles for visual interest.
    let isOdd = Number(artist._id[artist._id.length -1])% 2;

    return (
        <React.Fragment>

           {/* Dynamically alternate images left and right by adding "order-md-last" to odd artist IDs  */}

            <div className={`col-sm-4 text-center px-4 ${isOdd ? '' : 'order-md-last'}`} >
                    <img className="d-flex mr-3 img-thumbnail" src={baseUrl + artist.image} alt={artist.name} />
                    <Link to={`/${category}/${artist._id}`}>
                        <Button className="my-3" color="danger">View My Gallery</Button>
                    </Link>
            </div>

            {/* Create a simple text column using name, date (if one exists), rating, price, type, 
            description, address and URLfrom the artist item. Also generate a gold star icon array
            for a visual represenation of the rating. The MDBAnimation component makes the text block
            "zoom in" to its location in the column. */}
            <div className="col-sm-8 text-light px-4">
                    <h3>{artist.name}</h3>
                    <p>{artist.description}</p>
                    <p>{artist.specialty}</p>
            </div>
        </React.Fragment>
    );
}


function Artists(props) {
    console.log(props.artists);

    const artistList = props.artists.artists.map(artist => {
        return (
            <div key={artist._id} className="row row-content align-items-center">
                <RenderArtistItem category={props.category} artist={artist} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {/* This row has a description area above the artist profiles */}
                <div className="row row-noseparator align-items-center">
                    <div className="col">
                        <h3>Our Team</h3>
                        <p className="text-light">At Bad Panda Tattoo, we've created a home for artists that come from many different backgrounds, but we have several things in common: a love for art and a committment to deliver our best work while continuing to learn and grown on a daily basis. We'd like to introduce you to the cast of characters that make up Bad Panda.
                        </p>
                    </div>
                </div>
                <Fade in>
                    {artistList}
                </Fade>
            </div>
        </div>

    );

}

export default Artists;