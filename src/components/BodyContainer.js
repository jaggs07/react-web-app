import React, { Component } from 'react';
import Form from './Form'
import RowClass from './RowClass'
import axios from 'axios';
var FetchData = React.createClass({

    getInitialState: function(){

        return {
            title : '',
            location : '',
            sort : 'Relevance',
            posted: 'Any Time',
            distance: 'Any Where',
            posts:undefined
        };
    },

    setTitle: function(newTitle){
        this.setState({
            title: newTitle
        });
    },

    setLocation: function(newLocation){
        this.setState({
            location: newLocation
        });
    },


    setSort: function(newSort){
        this.setState({
            sort: newSort
        });
    },

    setPosted: function(newPosted){
        this.setState({
            posted: newPosted
        });
    },

    setDistance: function(newDistance){
        this.setState({
            distance: newDistance
        });
    },

    handleClick: function(){

    	axios.get(`http://54.234.23.64:8080/search/jobs`,{
		      params: {
		        title: this.state.title,
		        location: this.state.location
		      }
		    })
      .then(res => {
        this.setState({ posts: res.data });
        console.log(this.state.title,"data.....");
        if(res instanceof Error) {
             console.log(res.message);
         } else {

             this.setState({
             	posts:res.data
             })
         }
      });
    },
	render() {
		
			return (
			<div className="container text-center" > 
                <Form 
                    onClick={this.handleClick} 
                    title={this.state.title} 
                    onChangeTitle={this.setTitle} 
                    location={this.state.location}
                    onChangeLocation={this.setLocation}
                    />
				<RowClass 
				     posts={this.state.posts}
					 />
			</div>

		);
		
	
	}
});


module.exports = FetchData;
