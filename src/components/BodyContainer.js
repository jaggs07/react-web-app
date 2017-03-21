import React, { Component } from 'react';
import Form from './Form'
import axios from 'axios';
import $ from 'jquery';
import SideBar from './SideBar';
import SearchResults from './SearchResults';

var FetchData = React.createClass({

    getInitialState: function(){

        return {
            title : '',
            location : '',
            sort : 'relevance',
            posted: '',
            distance: '',
            posts:undefined,
            isChecked: [true, true, true],
            sites:'INDEED,ZIPRECRUITER,JOBS2CAREERS'
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

    handleCheckboxChange: function(newCheckboxStatus){

        var siteParamArray=[];

        this.setState({
            isChecked: newCheckboxStatus
        });

        if(newCheckboxStatus[0]){
            siteParamArray.push("INDEED");
        }
        if(newCheckboxStatus[1]){
            siteParamArray.push("ZIPRECRUITER");
        }
        if(newCheckboxStatus[2]){
            siteParamArray.push("JOBS2CAREERS");
        }

        var sitesParam = "";

        siteParamArray.map(function(name, index){
            if(index == ( siteParamArray.length - 1) ){

              sitesParam = sitesParam + name;
            }else{

                sitesParam = sitesParam + name + ",";
            }
        });

        this.setState({
            sites: sitesParam
        });

    },

    handleClick: function(){

    	axios.get(`http://54.234.23.64:8080/search/jobs`,{
		      params: {

		        title: this.state.title,
		        location: this.state.location,
                sort: this.state.sort,
                radius: this.state.distance,
                relevance: this.state.relevance,
                posted: this.state.posted,
                site: this.state.sites
		      },
		    })
      .then(res => {
        this.setState({ posts: res.data });
        console.log(this.state.title,"data.....");
        if(res instanceof Error) {
             console.log(res.message);
         } else {
             console.log(res.headers);

             this.setState({
             	posts:res.data
        })
         }
      });
    },
	render() {
		
			return (
			 <div className="container" > 
                        <Form 
                            onClick={this.handleClick} 
                            title={this.state.title} 
                            onChangeTitle={this.setTitle} 
                            location={this.state.location}
                            onChangeLocation={this.setLocation}
                            />
        				<div className = "row">
                                <SideBar 
                                isChecked = {this.state.isChecked}
                                onChangeCheckbox ={this.handleCheckboxChange}
                                sort={this.state.sort} 
                                onSortChange={this.setSort}
                                posted={this.state.posted} 
                                onPostedChange={this.setPosted}
                                distance={this.state.distance}
                                onDistanceChange={this.setDistance}
                                />
                                <SearchResults posts= {this.state.posts} />
                        </div>
			</div>

		);
	}
});


module.exports = FetchData;
