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
  public render() {
    const params = {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-custom-next',
        prevEl: '.swiper-custom-prev',
      },
      renderNextButton: () => <button className="swiper-custom swiper-custom-next" />,
      renderPrevButton: () => <button className="swiper-custom swiper-custom-prev" />,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 1
        }
      },
    };

    return (
      <div className="carousel-container">
        <Swiper {...params}>
          <img alt="icecream" src={icecream} />
          <img alt="oranges" src={oranges} />
          <img alt="strawberries" src={strawberries} />
          <img alt="kiwi" src={kiwi} />
        </Swiper>
      </div>
    );
  }
}

export default Carousel;