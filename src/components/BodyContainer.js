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
            checked: [true, true, true]

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

    handleSiteChange: function(changedSite){
        
        this.setState({
            checked: changedSite
        });
    },

    // setSiteParam: function(){
    //     var sites ='';
    //     for (var i = this.state.checked.length - 1; i >= 0; i--) {
    //         if(this.state.checked[i] == true && i == 0){
    //             sites = sites + '&site=INDEED';
    //             console.log(sites,"loop 1");
    //         }
    //         if(this.state.checked[i] == true && i == 1){
    //             sites = sites + '&site=ZIPRECRUITER';
    //             console.log(sites,"loop 2");

    //         }
    //         if(this.state.checked[i] == true && i == 2){
    //             sites = sites + '&site=JOBS2CAREERS';
    //             console.log(sites,"loop 3");
    //         }

    //         console.log(sites,"combined");
    //         return sites;

    //     }
    // },

    handleClick: function(){
        // var siteParam = this.setSiteParam();

    	axios.get(`http://localhost:8080/search/jobs`,{
		      params: {
		        title: this.state.title,
		        location: this.state.location,
                sort: this.state.sort,
                radius: this.state.distance,
                relevance: this.state.relevance,
                posted: this.state.posted,
                site: "INDEED,ZIPRECRUITER,JOBS2CAREERS"
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
                    checked={this.state.checked} // for checked sites
                    onChangeSite={this.handleSiteChange} //for hande site change
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
