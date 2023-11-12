import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Refer from 'Components/Refer'
import Explain from 'Components/Explain';

import 'semantic-ui-css/semantic.min.css'
import './DefaultLayout.scss'

const DefaultLayout = (props) => {
	const {
		children,
		pageTitle,
		reference = [],
		explain = [],
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
			{reference.length !== 0 && <Refer {...props} />}
			{explain.length !== 0 && <Explain {...props} />}
		</>
	)
}

export default DefaultLayout
