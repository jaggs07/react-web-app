import React, { Component } from 'react';
import SearchResults from './SearchResults'
import SideBar from './SideBar'

class RowClass extends Component {
	render() {
		return (
			<div class = "row">
				<SideBar />
				< SearchResults />
			</div>
		);
	}
}

export default RowClass;
