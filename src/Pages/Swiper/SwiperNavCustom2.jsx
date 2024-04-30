import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import DefaultLayout from 'Layout/DefaultLayout';
import Contents from 'Components/Contents';

import './Swiper.scss';

// const SlideNextButton = ({ children }) => {
//   const swiper = useSwiper();
//   return (
//     <button className='swiper-button-next' onClick={() => swiper.slideNext()}>
//       <span className='blind'>next</span>
//     </button>
//   );
// };

// const SlidePrevButton = ({ children }) => {
// 	const swiper = useSwiper();
//   return (
//     <button className='swiper-button-prev' onClick={() => swiper.slidePrev()}>
//       <span className='blind'>prev</span>
//     </button>
//   );
// };

const SwiperNavCustom2 = (props) => {
  const { pageTitle } = props;
  const swipeName = 'slider-navigation-custom2';

  return (
    <DefaultLayout pageTitle={pageTitle}>
      <div className='swiper-outside-wrap' style={{ width: '786px' }}>
        <Swiper
          // install Swiper modules
          // Navigation, Pagination, Scrollbar, A11y
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={swipeName}
          wrapperClass='custom2Class'
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          // onTransitionEnd={e => console.log(e.wrapperEl)}
          // onTransitionEnd={e => console.log(e.allowSlidePrev)}
          // effect='fade'
          // onTransitionEnd={e => console.log(e.fadeEffect)}
        >
          <SwiperSlide>
            <h2>{swipeName}, useSwiper</h2>
            <div className='inner-box'>
              <Contents />
              <Contents />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner-box'>
              <Contents />
              <Contents />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner-box'>
              <Contents />
              <Contents />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner-box'>
              <Contents />
              <Contents />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner-box'>
              <Contents />
              <Contents />
            </div>
          </SwiperSlide>
          {/* <div className='navigation'>
            <SlideNextButton>slide next</SlideNextButton>
            <SlidePrevButton>slide prev</SlidePrevButton>
          </div> */}
        </Swiper>
      </div>
    </DefaultLayout>
  );
};

export default SwiperNavCustom2;
