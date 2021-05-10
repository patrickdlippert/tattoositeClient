import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';
import CardCarousel from './CardCarouselComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderNewsItems({newsitems}) {
    if (newsitems) {
        return (
            <div className="col m-1">
                <Stagger in>
                    {newsitems.map(newsitem => {
                        return (
                            <Fade in key={newsitem._id}>
                                
                                <h4 className="text-light">{newsitem.title}</h4>
                                <a href={baseUrl + newsitem.image}><img src={baseUrl + newsitem.image} alt={newsitem.name} className="img-fluid" /></a>
                                <p className="text-light">{newsitem.description}</p>
                                <div>
                                    <span className="badge bg-light">Posted: {' '}
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(newsitem.date)))}</span>
                                </div>
                                <hr />
                            </Fade>
                        );
                    })}
                </Stagger>
            </div>
        );
    }
    return (<div />);
}

function RenderPromotions({promotions}) {
    if (promotions) {
        return (
            <div className="col m-1">
                <Stagger in>
                    {promotions.map(promotion => {
                        return (
                            <Fade in key={promotion.id}>
                                <Card className="card_thumbnail p-1 mb-4">
                                    <CardImg src={baseUrl + promotion.image} alt={promotion.name} title={promotion.description} />
                                    <CardBody className="text-center text-light">
                                        <CardTitle tag="h5">{promotion.name}</CardTitle>
                                        <CardText>{promotion.description}
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Fade>
                        );
                    })}
                </Stagger>
            </div>
        );
    }
    return (<div />);
}


function News({newsitems, reviews, promotions}) {
    if (newsitems) {
        return(
            <div className="container">
                <div className="row row-noseparator align-items-center">
                    <div className="col">
                        <h3>News and Events</h3>
                        <p className="text-light">If there is anything going on with us or the shop, you will find it here. Please check back frequently as we will update regularly. Also, be sure to click the links to our social media pages where you can be kept in the loop on upcoming events.
                        </p>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-md-8 photo-news">
                        <h3 className="pb-4">Latest News</h3>
                        <RenderNewsItems newsitems={newsitems} />
                    </div>


                    <div className="col-md-4">
                        <h3 className="pb-4">Promotions</h3>
                        <RenderPromotions promotions={promotions} />
                    </div>
                </div>

                <h3>Reviews</h3>
                <CardCarousel resources={reviews} />

            </div >
        );
    }
    return( <div /> );
}

export default News;