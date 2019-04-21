import React from 'react'
import './styles.css'

const Bgpic = (props) => {
    return(
        <div className='bg-container'>
            <img src={props.image} alt='pro-pic' className='bg-container' />
        </div>
    )
}

export default Bgpic;