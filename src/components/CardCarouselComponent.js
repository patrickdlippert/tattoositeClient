import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl } from '../shared/baseUrl';

// This component returns a scrolling carousel of card images. If the provided array of resource objects
// has a name with displayName true, apply an text image overlay using the name. Otherwise, no text will
// be applied.

function ConstructCard({resource}) {
    if( {resource} ) {
        return(
            <Card className="card_thumbnail p-1">
                <a target="_blank:" href={resource.url}>
                <CardImg src={baseUrl + resource.image} alt={resource.name} title={resource.description}/>
                </a>

                <CardBody className="text-center text-light">
     
              <CardTitle tag="h5">{resource.name}</CardTitle>
              <CardText>{resource.description}
            </CardText>
            </CardBody>
            </Card>
        );
    }
    return ( <span /> );
}


function RenderCards({resources}) {
    const cardslide = resources.map(resource => {
        return (
            <div key={resource.id} className="col m-1">
                <ConstructCard resource={resource} />
            </div>
        );
    });
    const settings = {
        autoplay: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
      };
      return (
        <div className="m-3">
          <Slider {...settings}>
              {cardslide}
          </Slider>
        </div>
      );
}


 

function CardCarousel(props) {
    if(props.resources) {
        
        return(
            <div className="container-fluid">
                <div className="row row-content text-center pt-2 pb-5">
                    <div className="col">
                        <RenderCards resources={props.resources} />
                    </div>
                </div>
            </div>
        );
    }

    return( <span> This is failing </span>) ;
}

export default CardCarousel;



