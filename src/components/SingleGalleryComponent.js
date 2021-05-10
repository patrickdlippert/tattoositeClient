import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Fade } from 'react-animation-components';
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


  
function SingleGallery(props) {
    const options = {
        caption: {
            showCaption: false
        },
        buttons: {
          showDownloadButton: false
        }
    };

    console.log(props.artist._id);
    console.log(props.galleryimages);
    if(props.artist) {
        return (
            <Fade in>
            <div className="container">
                <div className="row row-content">
                    <div className="photo-gallery px-4">
                        <div className="intro">
                            <h2 className="text-center">{props.artist.name} Gallery</h2>
                            <p className="text-center font-weight-normal">
                                {props.artist.specialty}
                            </p>
                        </div>
                        <SimpleReactLightbox>
                            <SRLWrapper options={options}>
                                <RenderGalleryPanel galleryimages={props.galleryimages.filter(
                                    gimages => gimages.artist === props.artist._id)} />
                            </SRLWrapper>
                        </SimpleReactLightbox>
                    </div>
                </div>
            </div>
            </Fade>

        );
    }
    return <div />;

}

export default SingleGallery;