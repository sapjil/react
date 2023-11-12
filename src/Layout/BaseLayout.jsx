import React from 'react'
import Header from './Header'
import Footer from './Footer'

import 'semantic-ui-css/semantic.min.css'
import './DefaultLayout.scss'

const DefaultLayout = (props) => {
	const {
		children,
		pageTitle,
	} = props;

	return (
		<>
			<Header pageTitle={pageTitle} />
			<div className='wrapper'>
				<div className='content-wrap'>
					{children}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default DefaultLayout
