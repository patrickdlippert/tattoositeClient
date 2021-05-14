import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="container">
            <div className="pb-0 mb-0 justify-content-center text-light">
                <footer className="site-footer">
                    <div className="row my-5 justify-content-center py-5">
                        <div className="col-11">
                            <div className="row">         

                                <div className="col-xl-6 col-md-4 col-sm-5 col-12 mx-auto">
                                    <img src="/images/BadPandaSquareLogo.png" className="logo-square" alt="Bad Panda Logo" />
                                </div>

                                <div className="col-xl-3 col-md-4 col-sm-3 col-12">
                                    <h6 className="mb-3 mb-lg-4 text-muted bold-text"><b>MENU</b></h6>
                                    <ul className="list-unstyled">
                                        <li><Link to='/home'>Home</Link></li>
                                        <li><Link to='/artists'>Artists</Link></li>
                                        <li><Link to='/matcher'>Matcher</Link></li>
                                        <li><Link to='/gallery'>Gallery</Link></li>                            
                                        <li><Link to='/shop'>Shop</Link></li>
                                        <li><Link to='/news'>News</Link></li>
                                        <li><Link to='/FAQ'>FAQ</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                    </ul>
                                </div>

                                <div className="col-xl-3 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>CONTACT</b></h6>
                                    <p className="mb-1"><strong>Bad Panda Tattoo Co.</strong></p>
                                    <p className="mb-1">555 Harbor View St</p>
                                    <p>Tacoma, WA 98402 </p>

                                    <p>Sun – Sat: 12noon – 9pm</p>
                                    <p><a href="mailto:badpandatattoo@gmail.com">badpandatattoo@gmail.com</a></p>
                                    <p><a href="tel:+12535551000">(253) 555-1000</a></p> 
                                </div>


                            </div>

                            <div className="row">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                    <p className="social text-muted mb-0 pb-0 bold-text "> 
                                        <a className="mx-3" href="http://facebook.com/" aria-hidden="true"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
                                        <a className="mx-3" href="http://instagram.com/" aria-hidden="true"> <i className="fa fa-instagram" aria-hidden="true"></i> </a>
                                        <a className="mx-3" href="http://twitter.com/" aria-hidden="true"> <i className="fa fa-twitter" aria-hidden="true"></i> </a>
                                        <a className="mx-3" href="http://youtube.com/" aria-hidden="true"><i className="fa fa-youtube" aria-hidden="true"></i> </a>
                                    </p>
                                    <small className="rights"><span>&#174;</span> Bad Panda All Rights Reserved.</small>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;