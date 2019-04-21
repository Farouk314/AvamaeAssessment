import React from 'react';
import Carousel from './Carousel/Carousel';
import './headerSection.css'

const HeaderSection = (props) => {
    return (
        <React.Fragment>
            <h1 className="header-text">Title</h1>
            <Carousel />
        </React.Fragment>
    )
};

export default HeaderSection;