import React from "react";
import RatingStars from "./RatingStarsComponent";
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';


function RenderShopping({shopitems}) {
    if (shopitems) {
        return (
            <div className="container" id="shopping-panel">
                <div className="row row-noseparator">
                    {shopitems.map(shopitem => {
                        return (
                            <div className="col-md-3 col-sm-6 mb-4" key={shopitem._id}>
                                <div className="product-grid9">
                                    <div className="product-image9">
                                        <Link to='/shop'>
                                            <img className="pic-1" src={baseUrl + shopitem.image1} alt={shopitem.name}/>
                                            <img className="pic-2" src={baseUrl + shopitem.image2} alt={shopitem.name} />
                                        </Link>
                                        <Link to='/shop' className="fa fa-search product-full-view"></Link>
                                    </div>
                                    <div className="product-content">
                                        <span className="rating">
                                        <RatingStars rating={shopitem.rating}  />
                                        </span>
                                        <h3 className="title"><Link to='/shop'>{shopitem.name}</Link></h3>
                                        <div className="price">{shopitem.price}</div>
                                        <Link to='/shop' className="add-to-cart">{shopitem.description}</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    return (<div />);
}

function Shop({shopitems}) {
    if (shopitems) {
        return(
            <div className="container">
                <div className="row row-noseparator align-items-center">
                    <div className="col">
                        <h3>Shopping</h3>
                        <p className="text-light">Take a little Bad Panda home with you!</p>
                    </div>
                </div>
                <RenderShopping shopitems={shopitems} />
            </div>
        );
    }
    return( <div /> );
}

export default Shop;