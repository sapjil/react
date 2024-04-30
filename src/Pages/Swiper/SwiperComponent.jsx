import React from 'react';
import DefaultLayout from 'Layout/DefaultLayout';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import Contents from 'Components/Contents';
import SliderComponent from './SliderComponent';

import './Swiper.scss';

const SwiperComponent = (props) => {
  const { pageTitle } = props;

  const swipeName = 'slider-custom-component';

  return (
    <DefaultLayout pageTitle={pageTitle}>
      <SliderComponent
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className={swipeName}
        style={{ width: '70rem' }}
        wrapperClass='wrapperClass'
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log('[swiper]', swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <h2>{swipeName}, inset SliderComponent</h2>
          <Contents />
          <Contents />
        </SwiperSlide>
        <SwiperSlide>
          <Contents />
          <Contents />
        </SwiperSlide>
        <SwiperSlide>
          <Contents />
          <Contents />
        </SwiperSlide>
        <SwiperSlide>
          <Contents />
        </SwiperSlide>
      </SliderComponent>
    </DefaultLayout>
  );
};

export default SwiperComponent;
