import DefaultLayout from 'Layout/DefaultLayout';
import React, { Component } from 'react'

class ClassSample extends Component {
	state = {
		increaseNum: 0,
		decreaseNum: 100,
		resultText: 'null'
	}
	render() {
		const { increaseNum, decreaseNum } = this.state;
		return (
			<DefaultLayout pageTitle='React Class Sample'>
				<p>increaseNum: {increaseNum}</p>
				<p>decreaseNum: {decreaseNum}</p>
				<p></p>
				<button
					onClick={() => {
						// this.setState(preState => (
						// 	{
						// 		increaseNum: preState.increaseNum + 1,
						// 		decreaseNum: preState.decreaseNum - 1
						// 	}),
						// 	() => {
						// 		console.log('callback');
						// 	}
						// );
						this.setState((preState, props) => {
							return {
								increaseNum: preState.increaseNum + 1,
								decreaseNum: preState.decreaseNum - 1
							}
						})
						this.setState(preState => (
							{increaseNum: preState.increaseNum + 1}
						))
					}}
				>btn</button>
			</DefaultLayout>
		)
	}
}

export default ClassSample
