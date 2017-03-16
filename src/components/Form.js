import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<div className="row">
		        <div className="col-sm-12">
			        <div className="panel panel-default text-left">
			            <div className="panel-body">

				             <form className="form-inline">

				                <div className="form-group col-sm-5">
					                  <label className="sr-only" for="exampleInputEmail3">Job Title </label>
					                  <input type="jobTitle" className="form-control" id="exampleInputEmail3" placeholder="JobTitle" />
				                </div>

				                <div className="form-group col-sm-5">
					                  <label className="sr-only" for="exampleInputPassword3">Location </label>
					                  <input type="location" className="form-control" id="exampleInputPassword3" placeholder="Location" />
					            </div>

				                <div className="form-group col-sm-2">
				                    <button type="submit" id="search_selected" className="btn btn-primary btn-findJobs">Search</button> 
				                </div> 
				                             
				              </form>    
			            </div>
			        </div>
		        </div>
  			</div>
		);
	}
}

export default Form;
