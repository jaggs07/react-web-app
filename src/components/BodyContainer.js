import React, { Component } from 'react';
import Form from './Form'
import RowClass from './RowClass'


class BodyContainer extends Component {
	render() {
		return (
			<div className="container text-center" > 
				<Form />
				<RowClass />

			</div>  
		);
	}
}

export default BodyContainer;
