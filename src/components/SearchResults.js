import React, { Component } from 'react';
// import FetchData from './FetchData';

var SearchResults = React.createClass ({
	
	render() {

		var jobArray = [];

		var isLoggedIn = this.props.posts;
		// console.log(isLoggedIn,  )

		if(typeof isLoggedIn !== "undefined"){

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
		}
       if(jobArray.length >0){
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
	}else{
			return (

			<div className="col-sm-9">
			    <div className="row">
				    <div className="col-sm-12">

					    <div className="bs-example">
						    <div className="alert alert-warning fade in suggest-info">
					        <strong>Suggestion!</strong> Enter the jobs that you are looking for.
					    </div>
					</div>

			        </div>
			    </div> 
		    </div>
		);
	}
	}
});

module.exports = SearchResults;
