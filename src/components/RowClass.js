import React, { Component } from 'react';
import SideBar from './SideBar'
import FetchData from './FetchData'

class RowClass extends Component {
	render() {
		return (
			<div className = "row">
				<SideBar />
				<FetchData />
			</div>
		);
	}
}
export default RowClass;
