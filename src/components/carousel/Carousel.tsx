import React, { useState } from 'react';

const CarouselComponent: React.FC = () => {
    // State for managing carousel
    const [counter, setCounter] = useState(0);

    // List of image URLs for the carousel
    const images = [
        "https://via.placeholder.com/150?text=Slide1",
        "https://via.placeholder.com/150?text=Slide2",
        "https://via.placeholder.com/150?text=Slide3",
        "https://via.placeholder.com/150?text=Slide4"
    ];

    // Carousel Logic
    const nextSlide = () => {
        setCounter(prevCounter => prevCounter >= images.length - 1 ? 0 : prevCounter + 1);
    }

    const prevSlide = () => {
        setCounter(prevCounter => prevCounter <= 0 ? images.length - 1 : prevCounter - 1);
    }

    // Constants for carousel
    const width = 100;

    return (
        <div className="carouselContainer">
            <div className="carousel">
                <div className="carouselInner" style={{ width: `${images.length * 100}%`, transform: `translateX(-${width * counter}%)` }}>
                    {images.map((imageUrl, index) => (
                        <div className="carouselItem" key={index} style={{ width: `${width}%` }}>
                            <img src={imageUrl} alt={`carousel ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="next" onClick={nextSlide}>Next</div>
            <div className="prev" onClick={prevSlide}>Prev</div>
        </div>
    );
}


export default CarouselComponent;
