import React from 'react'

import { Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderComponent = (props) => {
	const {
		modules = false,
		className = false,
		spaceBetween = false,
		slidesPerView = false,
		pagination = false,
		scrollbar = false,
		onSwiper,
		onSlideChange,
		wrapperClass = false,
		style = false,
		navigation = false,
	} = props;
	return (
		<>
			<div className='swiper-outside-wrap' style={style}>
				<Swiper
					wrapperClass={wrapperClass && wrapperClass}
					modules={modules && modules} //Navigation, Pagination, Scrollbar, A11y
					className={className && className}
					spaceBetween={spaceBetween ? spaceBetween : 30}
					slidesPerView={slidesPerView && slidesPerView}
					pagination={pagination && pagination}
					scrollbar={scrollbar && scrollbar}
					onSwiper={onSwiper && onSwiper}
					onSlideChange={onSlideChange && onSlideChange}
					navigation={navigation && navigation}
				>
					{props.children}
				</Swiper>
			</div>
		</>
	)
}

export default SliderComponent
