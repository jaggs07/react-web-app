import React, { Component } from 'react';
import FetchData from './FetchData';

class SearchResults extends Component {
	
	render() {

		var jobArray = [];

		var isLoggedIn = this.props.jobs;

		if(typeof isLoggedIn !== "undefined" ){

				isLoggedIn.map(function(job){

					jobArray.push(

						<div className="col-sm-9">

							<div className="jobTitle">
								<a href= {job.jobLink} target='_blank'>
	   						 		 <h2 className="jobHeader"> {job.title} </h2>
	   						 	</a>
							</div>

	 						<div className="jobOrganization"> 
	 							<span>
	 								<b>Company: </b>{job.companyName} 
	 							</span>
	 						</div>

	 						<div className="jobLocation">			          
			               		<span> 
			               			<b>Location: </b>{job.location} 
			               		</span>
		              		</div>

		               		<div className="posteDate">
		               			<span>
		               				 <b>Posted : </b>{job.date} 
		               			 </span>
		               		 </div> 

					   		<div className="partnerSite">
					   			<span>
					   				 <b>Partner Site: </b>{job.partnerSite} 
					   			</span>
					   		</div> 

						</div>
 					 );			               
		})
		}else{
			alert("inside else");
		}
		return (

			<div className="col-sm-9">
			    <div className="row">
				    <div className="col-sm-12">
				        <div className="well">
				            <div className="row">
					              	<ul>
					              		{jobArray}
					              	</ul>
				            </div>
			            </div>
			        </div>
			    </div> 
		    </div>
		);
	}
}

export default SearchResults;
