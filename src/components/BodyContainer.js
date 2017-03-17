import React, { Component } from 'react';
import Form from './Form'
import RowClass from './RowClass'


class BodyContainer extends Component {

	constructor(props, context) {
    super(props, context);

    this.state = {
      title: 'fdgdfgdfg',
      location: 'bbgbngbgb'
    };
  };
	setTitle(newTitle){
        this.setState({
            title: newTitle
        });
    }

    setLocation(newLocation){
        this.setState({
            location: newLocation
        });
    }


    setSort(newSort){
        this.setState({
            sort: newSort
        });
    }

    setPosted(newPosted){
        this.setState({
            posted: newPosted
        });
    }

    setDistance(newDistance){
        this.setState({
            distance: newDistance
        });
    }
	render() {
		return (
			<div className="container text-center" > 
                <Form 
                    onClick={this.handleClick} 
                    title={this.state.title} 
                    onChangeTitle={this.setTitle} 
                    location={this.state.location}
                    onChangeLocation={this.setLocation} />
				<RowClass />
			</div>  
		);
	}
}

export default BodyContainer;
