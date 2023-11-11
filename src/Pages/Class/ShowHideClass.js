import DefaultLayout from 'Layout/DefaultLayout';
import React, { Component } from 'react'

class ShowHideClass extends Component {
	constructor(props) {
		super(props);
		this.state = { isShow: true }

		// 콜백에서 this가 작동하기 위해 필요한 코드
		this.btnClick = this.btnClick.bind(this);
	}

	btnClick() {
		this.setState(state => ({isShow: !state.isShow}))
	}

	render() {
		return (
			<DefaultLayout pageTitle="React Class ShowHide">
				<button onClick={this.btnClick}
				>
					btn / {this.state.isShow ? 'ON' : 'OFF'}
				</button>

				{this.state.isShow && <p>lorem lorem lorem lorem</p>}
			</DefaultLayout>
		)
	}
}

export default ShowHideClass
