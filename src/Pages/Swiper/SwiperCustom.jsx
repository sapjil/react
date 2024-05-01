import React from 'react';
import DefaultLayout from 'Layout/DefaultLayout';

import { SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import Contents from 'Components/Contents';
import SliderComponent from './SliderComponent';

import './Swiper.scss';
import Button from '../../Components/Button';

const SwiperCustom = (props) => {
  const { pageTitle } = props;
  const swipeName = 'slider-custom';
  const swipeSecond = 'slider-button-wrapper';

  return (
    <>
      <DefaultLayout pageTitle={pageTitle}>
        <SliderComponent
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={swipeName}
          spaceBettween={20}
          slidesPerView={1}
          navigation
          initialSlide={1}
          pagination={{ clickable: true }}
          style={{ width: '70rem' }}>
          <SwiperSlide>
            <h2>1, {swipeName}</h2>
            <Contents />
            <Contents />
            <Contents />
          </SwiperSlide>
          <SwiperSlide>
            <h2>2, {swipeName}</h2>
            <p>
              초기설정 페이지 <code>`initialSlide={0}`</code>
            </p>
            <Contents />
            <Contents />
            <Contents />
          </SwiperSlide>
          <SwiperSlide>
            <h2>3, {swipeName}</h2>
            <Contents />
            <Contents />
            <Contents />
          </SwiperSlide>
        </SliderComponent>

        <div className='inline-block bg-slate-400'>
          <SliderComponent
            modules={[Scrollbar, A11y]}
            className={swipeSecond}
            spaceBettween={0}
            slidesPerView={'auto'}
            initialSlide={1}
            style={{ width: '30rem' }}>
            <SwiperSlide>
              <Button onClick={() => {}} size={'medium'}>
                dd1
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button onClick={() => {}} size={'medium'}>
                dd2
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button onClick={() => {}} size={'medium'}>
                dd3
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button onClick={() => {}} size={'medium'}>
                dd4
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button onClick={() => {}} size={'medium'}>
                dd5
              </Button>
            </SwiperSlide>
          </SliderComponent>
        </div>
      </DefaultLayout>
    </>
  );
};

export default SwiperCustom;
