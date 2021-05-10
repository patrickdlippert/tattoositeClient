import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { baseUrl } from '../shared/baseUrl';

function RenderGalleryThumbnail({category, galleryimage}) {
    return (

        <div className="col-sm-6 col-md-4 col-lg-3 item">
            <a href={baseUrl + galleryimage.image_full}>
                <img className="img-fluid" src={baseUrl + galleryimage.image_thumb} alt={galleryimage.name} />
            </a>
        </div>

    );
}

function RenderGalleryPanel({category, galleryimages}) {
    if (galleryimages) {
        return (
            <div className="row photos">
                {galleryimages.map(galleryimage => {
                    return (
                        <RenderGalleryThumbnail key={galleryimage._id} galleryimage={galleryimage} />
                    );
                })}
            </div>
        );
    }
    return (<div />);
}

function RenderGalleryTabs({category, galleries, galleryimages}) {
    const options = {
        caption: {
            showCaption: false
        },
        buttons: {
          showDownloadButton: false
        }
    };


    return(galleries.map(gallery => {
        return (
            <TabPane key={gallery._id} tabId={`${gallery._id}`}>
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">{gallery.name} Gallery</h2>
                        <p className="text-center font-weight-normal">
                            {category === "styles" ? gallery.description : gallery.specialty}
                        </p>
                    </div>
                    <SimpleReactLightbox>
                        <SRLWrapper options={options}>

                        {category === "styles" ? 
                            (<RenderGalleryPanel galleryimages={galleryimages.filter(
                                gimages => gimages.typecode === gallery.typecode)} />) :
                            (<RenderGalleryPanel galleryimages={galleryimages.filter(
                                gimages => gimages.artist === gallery._id)} />) }


                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>
            </TabPane>
            );
        })
    );
}



function Galleries(props) {
   // const [activeTab, setActiveTab] = useState('1');
    const [activeTab, setActiveTab] = useState(props.galleries[0]._id);
    const [activeCategory, setActiveCategory] = useState(props.category);

    // If the style of gallery changes, reset the active tab to be on the first ID in the gallery collection
    if(activeCategory !== props.category) {
        setActiveCategory(props.category);
        setActiveTab(props.galleries[0]._id);
    }

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    
    // Dynamically create the labeled tab links using the ids and names from the galleries object
    const navlinkList = props.galleries.map(gallery => {
        return (
            <NavItem key={gallery._id}>
                <NavLink
                    className={activeTab === gallery._id.toString() ? 'active' : ''}
                    onClick={() => { toggle(gallery._id.toString()); }}
                >
                    {gallery.name_short}
                </NavLink>
            </NavItem>
        );
    });

    return (
        <div className="container">
            {/* This row has a description area above the galleries */}
            <div className="row row-noseparator align-items-center">
                <div className="col">
                    <h3>{`${props.category === "styles" ? 'Tattoo Style' : 'Artist'}`} Galleries</h3>
                    <p className="text-light">{`${props.category === "styles" ? 'Explore the most common styles of modern tattooing!' : 'Explore the artwork of our very talented staff!'}`}</p>
                </div>
            </div>


            <div className="row row-content">
                <div className="photo-gallery">
                    <Nav tabs>
                        {navlinkList}
                        <TabContent id="tab-content" activeTab={activeTab}>
                            <RenderGalleryTabs category={props.category} galleries={props.galleries} galleryimages={props.galleryimages} />
                        </TabContent>
                    </Nav>
                </div>
            </div>
        </div>

    );

}

export default Galleries;