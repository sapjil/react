import React from 'react'
import uuid from 'react-uuid'

const Profile = (props) => {
	const {name, age, hobbies } = props;
	return (
		<div>
			<div>name: {name}</div>
			<div>age: {age}</div>
			<div>
				<span>hobby</span>
				<ul>
					{hobbies.map(hobby => (
						<li key={uuid()}>{hobby}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Profile
