import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
    if (images.length === 0){
        return (
          <div className="image-gallery empty"></div>
        );
    }
    else if (images.length === 1) {
        return (
            <div className="image-gallery single">
                <img src={images[0]} alt="Post" className="single-image" />
            </div>
        );
    } else if (images.length === 2) {
        return (
            <div className="image-gallery double">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Post ${index}`} className="double-image" />
                ))}
            </div>
        );
    } else if (images.length === 3) {
        return (
            <div className="image-gallery triple">
                <img src={images[0]} alt="Main" className="large-image" />
                <div className="small-images">
                    {images.slice(1).map((src, index) => (
                        <img key={index} src={src} alt={`Small ${index}`} className="small-image" />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="image-gallery multiple">
                <img src={images[0]} alt="Main" className="large-image" />
                <div className="carousel">
                    {images.slice(1).map((src, index) => (
                        <img key={index} src={src} alt={`Carousel ${index}`} className="carousel-image" />
                    ))}
                </div>
            </div>
        );
    }
};

export default ImageGallery;
