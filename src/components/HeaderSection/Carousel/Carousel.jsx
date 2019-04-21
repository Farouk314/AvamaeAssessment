import React from 'react';
import './carousel.css';
import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper/dist/js/swiper.esm';
import '../../../../node_modules/swiper/dist/css/swiper.min.css';
import icecream from '../../../assets/icecream.jpg'
import oranges from '../../../assets/oranges.jpg'
import strawberries from '../../../assets/strawberries.jpg'
import kiwi from '../../../assets/kiwi.jpg'



class Carousel extends React.Component {
  render() {
    const params = {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        600: {
          slidesPerView: 1
        }
      },
    };

    return (
      <div>
        <Swiper {...params}>
          <img alt="img" src={icecream} />
          <img alt="img" src={oranges} />
          <img alt="img" src={strawberries} />
          <img alt="img" src={kiwi} />
        </Swiper>
      </div>
    );
  }
}

export default Carousel;