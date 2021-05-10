import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import HomeCarousel from './HomeCarouselComponent';



class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">

                    <div className="row row-content">
                        <div className="col-md-10 mx-auto">
                            <HomeCarousel items={this.props.billboards}  />
                        </div>
                    </div>


                    <div className="row row-noseparator align-items-center">
                        <div className="col">
                            <h3>Our unique approach to tattooing brings artists and clients together</h3>
                            <p className="text-light">At Bad Panda Tattoo, we strive to find the perfect match between our artists and our clients.
                                Our "artist matcher" lets us know a little bit about you so that we can pair you with somebody
                                who understands your needs while bringing our knowledge into the project.
                            </p>
                        </div>
                    </div>


                    <div className="row row-content align-items-center">
                        <div className="col-sm-4">
                            <Card className="h-100 my-2">
                                <CardImg top src="/assets/images/AboutYou.png" alt="About You Pic" />
                                <CardBody className="text-center text-light">
     
                                    <CardTitle tag="h5">Tell us about you</CardTitle>
                                    <CardText>It's important that we know about any anxiety that you may have in 
                                        getting a tattoo. It's also important to know about your intended placement as some 
                                        areas are much more sensitive to the ink process.
                                    </CardText>
                                    <Link to="/matcher">
                                        <Button color="danger">Match with an Artist</Button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-sm-4">
                            <Card className="h-100 my-2">
                                <CardImg top src="/assets/images/WhatInspires.png" alt="What Inspires Pic" />
                                <CardBody className="text-center text-light">
     
                                    <CardTitle tag="h5">What inspires you?</CardTitle>
                                    <CardText>What is the subject matter of your new tattoo? What style of tattoo
                                        are you looking for? Do you have a very clear idea of what your tattoo should look like or would you like our artists to guide you?
                                    </CardText>
                                    <Link to="/gallery">
                                        <Button color="danger">View Galleries</Button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-sm-4">
                            <Card className="h-100 my-2">
                                <CardImg top src="/assets/images/AboutUs.png" alt="About Us Pic" />
                                <CardBody className="text-center text-light">
     
                                    <CardTitle tag="h5">What inspires us</CardTitle>
                                    <CardText>We're here to deliver the highest quality tattoos in the industry, but 
                                        there's nothing more important than satisfying our customers! We're here to explore our
                                        artistry and take you on a journey with us.
                                    </CardText>
                                    <Link to="/artists">
                                        <Button color="danger">View Artist Profiles</Button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>
                 
                    </div>



                    <div className="row row-content align-items-center">
                        <div className="col-sm-4">
                                <img className="d-flex img-thumbnail" src="/assets/images/ShopExterior.png" alt="Shop Exterior" />
                        </div>
                        <div className="col-sm-4">
                                <img className="d-flex img-thumbnail" src="/assets/images/ShopInterior.png" alt="Shop Interior" />
                        </div>
                                    
                        <div className="col-sm-4">
                            <h3>Our Shop</h3>
                            <p className="d-sm-block text-light">Come visit our beautiful new shop location in downtown Tacoma, WA. Our comfortable, modern and hygenic facilities are open for both walk-ins and by appointment (highly recommended).</p>
                        </div>
                    </div>



                </div>
            </React.Fragment>
        );
    }
}

export default Home;