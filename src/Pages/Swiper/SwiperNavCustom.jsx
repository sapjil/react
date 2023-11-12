import React, { useRef } from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import DefaultLayout from 'Layout/DefaultLayout';
import Contents from 'Components/Contents';
import './Swiper.scss';

const SwiperNavCustom = (props) => {
	const { pageTitle } = props;
  const swiperRef = useRef();
  const swipeName = 'slider-navigation-custom';

  return (
    <DefaultLayout pageTitle={pageTitle}>
      <div className='swiper-outside-wrap' style={{ width: '60rem' }}>
        <Swiper
          // install Swiper modules
          // Navigation, Pagination, Scrollbar, A11y
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={swipeName}
          wrapperClass='wrapperClass'
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // console.log(swiperRef.current)
            // console.log(swiper)
          }}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <h2>{swipeName}, swiperRef</h2>
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
            <Contents />
          </SwiperSlide>
          <SwiperSlide>
            <Contents />
          </SwiperSlide>
          {/* <div className='navigation'>
            <button
              className='swiper-button-prev'
							onClick={() => swiperRef.current.slidePrev()}
            >
              <span className='blind'>Go to Prev Slide</span>
            </button>
            <button
              className='swiper-button-next'
							onClick={() => swiperRef.current.slideNext()}
            >
              <span className='blind'>Go to Next Slide</span>
            </button>
          </div> */}
        </Swiper>
      </div>
    </DefaultLayout>
  );
};

export default SwiperNavCustom;
