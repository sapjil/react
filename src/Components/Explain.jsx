import React from 'react'
import { Link } from 'react-router-dom';

const Explain = (props) => {
	const { explain } = props;
	return (
		<>
			<div className='info-wrap'>
				<h3>Explain</h3>
				<ul>
					{explain.map(((item, index) => (
						<li key={index}>
							<Link to={item.link} target="_blank">{item.text}</Link>
						</li>
					)))}
				</ul>
			</div>
		</>
	)
}

export default Explain
