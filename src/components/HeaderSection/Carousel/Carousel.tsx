import React from 'react';
import './carousel.css';
import Swiper from "swiper";
import '../../../../node_modules/swiper/dist/css/swiper.min.css';
import icecream from '../../../assets/icecream.jpg';
import oranges from '../../../assets/oranges.jpg';
import strawberries from '../../../assets/strawberries.jpg';
import kiwi from '../../../assets/kiwi.jpg';

class Carousel extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      breakpoints: {
        768: {
          slidesPerView: 1
        }
      },
      spaceBetween: 30,
      loop: true,
    });
  }

  render() {
    return (
      <div className="swiper-box">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <img className="swiper-slide" src={icecream} alt="icecream" />
            <img className="swiper-slide" src={oranges} alt="oranges" />
            <img className="swiper-slide" src={strawberries} alt="strawberries" />
            <img className="swiper-slide" src={kiwi} alt="kiwi" />
          </div>
        </div>
        {/* Swiper nav buttons */}
        <div className="swiper-button-next swiper-button-white swiper-custom swiper-custom-next" />
        <div className="swiper-button-prev swiper-button-white swiper-custom swiper-custom-prev" />
      </div>
    );
  }
}

export default Carousel;