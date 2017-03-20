import React, { Component } from 'react';

var SideBar = React.createClass ({

		handleChangeSort: function(e){
		var sort = e.target.value;
		this.props.onSortChange(sort);
	},

	handleChangePosted: function(e){

		var posted = e.target.value;
		this.props.onPostedChange(posted);
	},

	handleChangeDistance: function(e){

		var distance = e.target.value;
		this.props.onDistanceChange(distance);
	},

	handleChangeSite: function(e){
		var checkedStatus = [];
		var checkedIndeed;
		var checkedZipRecruiter;
		var checkedJob2Careers;

		if(this.state.checked[0]){
			checkedIndeed = false;
		}else{
			checkedIndeed = true;
		}

		if(this.state.checked[1]){
			checkedZipRecruiter = false;
		}else{
			checkedZipRecruiter = true;
		}

		if(this.state.checked[2]){
			checkedJob2Careers = false;
		}else{
			checkedJob2Careers = true;
		}

		checkedStatus = [checkedIndeed, checkedZipRecruiter, checkedJob2Careers];

		this.props.onChangeSite(checkedStatus);
	},
	render() {

		return (
			   
			<div className="col-sm-3">

				<div className="well">

					<p>
						<b>Partner Sites</b>
					</p>

					<div className="checkbox">
					    <label>
					        <input type="checkbox" 
					        		data-key='0'
					        		checked={this.props.checked[0]} 
					        		onChange={this.handleChangeSite}/> 
					        	Indeed
					    </label>
					    <label>
					        <input type="checkbox" 
					        		data-key='1'
					        		checked={this.props.checked[1]} 
					        		onChange={this.handleChangeSite}/> 
					        	ZipRecruiter
					    </label>
					    <label>
					        <input type="checkbox"
					        		data-key='2'
					        		checked={this.props.checked[2]} 
					        		onChange={this.handleChangeSite}/>  
					        	Jobs2Careers
					    </label>
					</div>

				</div>

			    <div className="well">

			        <p><b>Sort By</b></p>
			        <select className="selectpicker" onChange={this.handleChangeSort}>
			          <option value="relevance">Relevance</option>
			          <option value="date">Date</option>
			        </select>

			    </div>

			    <div className="well">
			        <p><b>Posted</b></p>
		            <select className="selectpicker" onChange={this.handleChangePosted}>
		                 <option> AnyTime </option>
		                 <option value="1"> Within 1 Day </option>
		                 <option value="3"> Within 3 Day </option>
		                 <option value="7"> Within 7 Day </option>
		                 <option value="15"> Within 15 Day </option>
		            </select>
			    </div>

			    <div className="well">
			        <p><b>Distance</b></p>
		                <select className="selectpicker" onChange={this.handleChangeDistance}>
		                     <option> Anywhere </option>
		                     <option value="5"> Within 5 Miles </option>
		                     <option value="10"> Within 10 Miles </option>
		                     <option value="15"> Within 15 Miles </option>
		                     <option value="25"> Within 25 Miles </option>
		                     <option value="50"> Within 50 Miles </option>
		                     <option value="100"> Within 100 Miles </option>
		                </select>
			    </div>
			</div>
    );
	}
});


module.exports = SideBar;