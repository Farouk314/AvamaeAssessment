import React from 'react';
import './pictureText.css'
import watermelon from '../../../assets/watermelon.jpg'

const PictureText = () => {
    return (
        <div className='image-container'>
            <img src={watermelon} alt="watermelon" className="watermelon-image" />
            <h2 className="image-text">
                Lorem ipsum dolot sit amet, tritani delenit molestie his no.
                Ut mei inani semper, his sale semper aliquip at. Laudem
                sensibus et sed. No sea munere vivendo, te reqeue choro cum,
                eum purto omnium ut.
            </h2>
        </div>
    )
};

export default PictureText;