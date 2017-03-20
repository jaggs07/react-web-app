import React, { Component } from 'react';




var SearchResults = React.createClass ({

	render() {

		var jobArray = [];

		var isLoggedIn = this.props.posts;

		if(typeof isLoggedIn !== "undefined"){

				isLoggedIn.map(function(job,i){

					jobArray.push(
				      <div key={i} className="row job-section">

						<div className="col-sm-9 job-details">

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
					              		{jobArray}
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

					    <div className="info-message">
						    <div className="alert alert-warning fade in suggest-info">
					        <strong>Look for the jobs that fits for you.</strong>
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
