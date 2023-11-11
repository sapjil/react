import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import { Icon } from 'semantic-ui-react'

import DefaultLayout from 'Layout/DefaultLayout'
import './ReactCalendar.scss'

const DoublePrevIcon = ({Children}) => {
	return <Icon name='arrow alternate circle left' />
}
const PrevIcon = ({Children}) => {
	return <Icon name='arrow alternate circle left outline' />
}
const NextIcon = ({Children}) => {
	return <Icon name='arrow alternate circle right outline' />
}
const DoubleNextIcon = ({Children}) => {
	return <Icon name='arrow alternate circle right' />
}
const TileContent = ({ Children }) => {
	return (
		<>
			<div style={{display:'flex',justifyContent:'center',columnGap:'.25rem'}}>
				<div className='dot'><span className='blind'>sss</span></div>
				<div className='dot'><span className='blind'>sss</span></div>
			</div>
		</>
	)
}

const ReactCalendar = (props) => {
	const { pageTitle } = props;

	const [value, onChange] = useState(new Date())

	return (
		<DefaultLayout pageTitle={pageTitle}>
			<p>
				<Link to='https://github.com/wojtekmaj/react-calendar/blob/main/packages/react-calendar/README.md' target='_blank'>react calendar</Link>
			</p>
			<p>
				<Link to='https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/' target='_blank'>react calendar tutorial build-customize</Link>
			</p>
			<div style={{ display: 'flex', columnGap: '2rem', rowGap: '2rem', flexWrap:'wrap' }}>
				<div>
					<Calendar
						calendarType='islamic'
						className='custom-react-calendar'
						value={value}
						// view='decade' //month, year, decade, century
						showWeekNumbers
						onChange={onChange}
					/>
					<div>selected: {moment(value).format('YYYY.MM.DD')}</div>
				</div>
				<div>
					<Calendar
						calendarType='islamic'
						className='custom-react-calendar'
						value={value}
						locale="ko-KR"
						formatDay={(locale, date) => moment(date).format('D')}
						view='month' //month, year, decade, century
						minDetail="decade"
						showWeekNumbers={false}
						prev2Label={<DoublePrevIcon />}
						prevLabel={<PrevIcon />}
						prevAriaLabel='Prev'
						prev2AriaLabel='Jump Prev'
						nextAriaLabel='Next'
						next2AriaLabel='Jump Next'
						nextLabel={<NextIcon />}
						next2Label={<DoubleNextIcon />}
						onChange={onChange}
						allowPartialRange={true}
						selectRange={true}
					/>
					<div>selected: {moment(value).format('YYYY년 MM월 DD일')}</div>
				</div>
				<div>
					<Calendar
						calendarType='islamic'
						className='custom-react-calendar'
						value={value}
						locale="ko-KR"
						formatDay={(locale, date) => moment(date).format('D')}
						view='month' //month, year, decade, century
						minDetail="month"
						maxDetail="month"
						showWeekNumbers={false}
						showNeighboringMonth={false}
						prev2Label={<DoublePrevIcon />}
						prevLabel={<PrevIcon />}
						prevAriaLabel='Prev'
						prev2AriaLabel='Jump Prev'
						nextAriaLabel='Next'
						next2AriaLabel='Jump Next'
						nextLabel={<NextIcon />}
						next2Label={<DoubleNextIcon />}
						onChange={onChange}
						allowPartialRange={true}
						selectRange={false}
						tileContent={
							({ date, view }) => {
								return (
									view === 'month' && date.getDay() ? <TileContent /> : null
								)
							}
						}
					/>
					<div>selected: {moment(value).format('YYYY년 MM월 DD일')}</div>
				</div>
			</div>
		</DefaultLayout>
	)
}

export default ReactCalendar
