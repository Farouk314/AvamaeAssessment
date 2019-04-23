import React from 'react';
import Carousel from './Carousel/Carousel';
import './headerSection.css'

const HeaderSection = () => {
    return (
        <div className="carousel-box">
            <h1 className="header-text">Title</h1>
            <Carousel />
        </div>
    )
};

export default HeaderSection;