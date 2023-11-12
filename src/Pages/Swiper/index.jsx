import React from 'react'
import { Link } from 'react-router-dom';

import {Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import DefaultLayout from 'Layout/DefaultLayout'
import Contents from 'Components/Contents';

import './Swiper.scss'

const SwiperDefault = (props) => {

	const reference = [
		{ link:'https://swiperjs.com/react', text:'swiperjs react'}
	]
	const explain = []

	const swipeName = 'slider-default'

	return (
		<DefaultLayout reference={reference} explain={explain} {...props}>
			<div className='swiper-outside-wrap' style={{ width: '30rem' }}>
				<Swiper
					// install Swiper modules
					// Navigation, Pagination, Scrollbar, A11y
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					className={swipeName}
					wrapperClass='wrapperClass'
					spaceBetween={30}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					// scrollbar={{ draggable: true }}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log('slide change')}
				>
					<SwiperSlide>
						<h2>{swipeName}</h2>
						<div>
							<img src='https://placekitten.com/640/360' alt='' />
						</div>
						<Contents />
					</SwiperSlide>
					<SwiperSlide>
						<Contents />
						<div>
							<img src='https://placekitten.com/640/360' alt='' />
						</div>
						<Contents />
					</SwiperSlide>
					<SwiperSlide>
						<Contents />
						<Contents />
					</SwiperSlide>
					<SwiperSlide>
						<Contents />
						<div>
							<img src='https://placekitten.com/640/360' alt='' />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</DefaultLayout>
	)
}

export default SwiperDefault
