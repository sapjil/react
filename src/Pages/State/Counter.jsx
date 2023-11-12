import React, { useState } from 'react'
import CountOne from './components/CountOne'
import CountTwo from './components/CountTwo'
import DefaultLayout from 'Layout/DefaultLayout';

const Counter = (props) => {
	// const reference = []
	// const explain = []

	const [oneSet, setOneSet] = useState(0);
	const [twoSet, setTwoSet] = useState(0);

	const allReset = () => {
		setOneSet(0)
		setTwoSet(0)
	}

	return (
		<DefaultLayout {...props}>
			<div style={{display:'flex', columnGap:'2rem', alignItems:'center'}}>
				<CountOne oneSet={oneSet} setOneSet={setOneSet} />
				<CountTwo twoSet={twoSet} setTwoSet={setTwoSet} />
				<button onClick={allReset}>reset</button>
				<strong style={{fontSize:'2rem'}}>{oneSet + twoSet}</strong>
			</div>
		</DefaultLayout>
	)
}

export default Counter
