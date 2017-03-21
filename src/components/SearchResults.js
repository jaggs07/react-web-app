import React, { Component } from 'react';


var Image = React.createClass({

    render: function(){
        var img;
        if (this.props.siteType == 'indeed'){
            img = "../../img/indeed.jpg";
        }
        if (this.props.siteType == 'zipRecruiter'){
			img = "../../img/ziprecruiter.svg";
        }
        if (this.props.siteType == 'jobs2Carrers'){
            img = "../../img/jobs2careers.png";
        }
        return(
            <img className="site-image" src={img} className="site-image" height="100" width="100" alt="Avatar" />  
        );
    }
});

var SearchResults = React.createClass ({

	render() {

		var jobArray = [];

		var isLoggedIn = this.props.posts;

		if(typeof isLoggedIn !== "undefined"){

				isLoggedIn.map(function(job,i){

					jobArray.push(

		        	<li className="job-content">

							<div key={i} className="col-sm 9 job-details">

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

							<div className="col-sm-3 job-image">
									<span className="site-text">Apply on</span>
	           					     <Image siteType={job.partnerSite} /> 
	           				</div> 	
           			</li>

           				    
 				);			               
		})
		}
       if(jobArray.length >0){
		return (

			<div className="col-sm-9">
			    <div className="row">
				    <div className="col-sm-12">
				        <ul className="job-wrapper">
					              		{jobArray}
			            </ul>
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
