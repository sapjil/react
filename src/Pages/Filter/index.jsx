import React, { useState } from 'react'
import DefaultLayout from 'Layout/DefaultLayout'
import uuid from 'react-uuid'
import Profile from './Profile'

const Dummy = ['1', null, '2', '4', 'Dog', undefined, 'Cat', 'Tiger', 'Building']

const Dummy2 = [
	{name:'Tom', age:24, hobbies: ['movie', 'music']},
	{name:'Lisa', age:20, hobbies: ['sports', 'music']},
	{name:'Geo', age:18, hobbies: ['movie', 'music']},
]

const Filter = (props) => {
	const { pageTitle } = props;

	const [filterVal, setFilterVal] = useState("");
	const [filterVal2, setFilterVal2] = useState("");

	return (
		<DefaultLayout pageTitle={pageTitle}>
			<div style={{ display: 'flex', columnGap:'2rem' }}>
				<div className='part1'>
					<div>
						<input type="text"
							value={filterVal}
							onChange={(e) => setFilterVal(e.target.value)}
						/>
					</div>
					<ul>
						{Dummy
							// .filter(dummyItem => dummyItem.indexOf(filterVal) !== -1)
							.filter((dummyItem) => {
								const checkValueStr = dummyItem || "";
								const checkValue = checkValueStr.indexOf(filterVal) !== -1;
								console.log(checkValueStr.indexOf(filterVal))
								return checkValue
							})
							.map(dummyItem =>
								dummyItem
									? <li key={uuid()}>{dummyItem}</li>
									: <li key={uuid()}>{'null, undefined'}</li>
							)
						}
					</ul>
				</div>
				<div className='part2'>
					<div>
						<input type="text"
							value={filterVal2}
							onChange={(e) => setFilterVal2(e.target.value)}
						/>
					</div>
					<ul>
						{Dummy2
							.filter(person => {
								const isMatch = person.name.indexOf(filterVal2) !== -1;
								return isMatch;
							})
							.map(person => (
							<li key={person.name}>
								<Profile {...person} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</DefaultLayout>
	)
}

export default Filter
