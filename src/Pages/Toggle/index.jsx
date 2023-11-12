import React, { useState } from 'react'
import DefaultLayout from 'Layout/DefaultLayout'

import './Toggle.scss'

const Toggle = (props) => {
	// const reference = []
	// const explain = []

	const [exam, setExam] = useState(true);
	const [toggle, setToggle] = useState(false);

	const handler = () => {
		setExam(prev => !prev);
	}
	const handler2 = () => {
		setToggle(prev => !prev);
	}

	return (
		<DefaultLayout {...props}>
			<div style={{ display: 'flex', columnGap:'2rem' }}>
				<div>
					<button onClick={handler}>handler</button>
					{exam ? <div>Toggle 1 Area</div> : <div>Toggle 2 Area</div>}
				</div>
				<div>
					<button
						onClick={handler2}
						className={toggle === true && 'on'}>toggle handler</button>
					{toggle
						? <div className='toggle-wrapper'>
							<div className='toggle-menu'>
								<ul>
									<li>Toggle 1 Area</li>
									<li>Toggle 2 AreaToggle 2 Area</li>
									<li>Toggle 3 Area</li>
								</ul>
							</div>
						</div>
						: ''
					}
					{/* {toggle ? <div>Toggle 1 Area</div> : <div>Toggle 2 Area</div>} */}
				</div>
			</div>
		</DefaultLayout>
	)
}

export default Toggle
