import React from 'react'
import './carousel.css'

const CustomButton = (props) => {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
};

export default CustomButton;