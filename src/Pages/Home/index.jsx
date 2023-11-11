import BaseLayout from 'Layout/BaseLayout'
import React from 'react'

const Home = (props) => {
	const {pageTitle } = props;
	return (
		<BaseLayout pageTitle={pageTitle}>
			리액트 공부하면서 만들어 본 기초적인 것들 기록 저장소
		</BaseLayout>
	)
}

export default Home
