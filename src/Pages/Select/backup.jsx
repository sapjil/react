// https://velog.io/@ljo094822/react-map%ED%95%A8%EC%88%98-%ED%81%B4%EB%A6%AD-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%97%90%EC%84%9C-%ED%95%9C%EA%B0%9C%EC%9D%98-%EA%B0%92%EB%A7%8C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0
// https://velog.io/@miyoni/TIL39
// https://junheedot.tistory.com/11
// https://jjyabbu.tistory.com/50

import React, { useState } from 'react'
import DefaultLayout from 'Layout/DefaultLayout'

import './Select.scss'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

const DummyItem = [
	{id:0, link:'/Select', text: 'item 1'},
	{id:1, link:'/Select', text: 'item 2'},
	{id:2, link:'/Select', text: 'item 3'},
	{id:3, link:'/Select', text: 'item 4'},
	{id:4, link:'/Select', text: 'item 5'},
]

const Select = (props) => {
	// const reference = []
	// const explain = []

	const [listShow, setListShow] = useState(true);
	const [valueArea, setValueArea] = useState();
	const [isActive, setIsActive] = useState(false);

	// const [tagList] = useState(Array(DummyItem.length).fill(false));
	// console.log(tagList.length);
	// console.log(tagList);

	// const listHandler = () => {
	// 	setListShow(prev => !prev)
	// }
	const listHandler = () => setListShow(!listShow)

	// const selectedIndex = DummyItem.findIndex(e => e.id === selectedItem)
	const linkHandler = (e) => {
		// console.log(e.currentTarget.id);
		// console.log(e.currentTarget);
		const id = e.currentTarget.id;
		console.log('id', id)

		const newArr = Array(DummyItem.length).fill(false);
		newArr[id] = true;
		if ( newArr[id] === true ) {
			console.log(newArr);
			console.log(e.currentTarget.text);
		}
		// console.log(e.target);
		setValueArea(e.currentTarget.text)
		// setIsActive(tagList => !tagList)
	}

	const [selectedOption, setSelectedOption] = useState(null);
	const onOptionClicked = value => (e) => {
		setSelectedOption(value);
		setValueArea(e.currentTarget.text)
		setListShow(false);
		console.log(selectedOption);
	};

	// Reverse(얕은복사)
	// DummyItem를 list로 재정의
	// [...list] 전개구문으로 배열의 복사본 생성
	const [list, setList] = useState(DummyItem);
	const copyList = [...list];
	// console.log(list);

	const reverseHandler = () => {
		copyList.reverse();
		// console.log(copyList);
		setList(copyList);
	}

	const handleOver = () => {
		console.log('handleOver')
	}
	const handleOut = () => {
		console.log('handleOut')
	}

	return (
		<DefaultLayout {...props}>
			<div style={{display:'flex',columnGap:'3rem'}}>
				<div>
					<button type='button'
						onClick={listHandler}
					>select</button>
					<div className='selected-wrap'>
						<p>{ valueArea || 'select contents area' }</p>
					</div>
					{listShow === true &&
						<div className='list-wrap'>
							<ul>
								{DummyItem.map(item => (
									<li key={item.id}>
										<Link
											id={item.id}
											to={item.link}
											className={`link ${isActive  ? 'active' : 'deactive'}`}
											onClick={linkHandler}
											// onClick={onOptionClicked(item.text)}
										>{item.text}</Link>
									</li>
								))}
							</ul>
						</div>
					}
				</div>
				<div>
					<button onClick={reverseHandler}>reverse</button>
					<div className='list-wrap'>
						<ul>
						{copyList.map(subitem => (
							<li
								key={uuid()}
								// onMouseOver={e => handleOver(e)}
								// onMouseOut={e => handleOut(e)}
							>{subitem.text}</li>
						))}
						</ul>
					</div>
				</div>
			</div>
		</DefaultLayout>
	)
}

export default Select
