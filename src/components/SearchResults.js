import React, { Component } from 'react';
import FetchData from './FetchData';

class SearchResults extends Component {
	

	render() {
		return (

			
			<div className="col-sm-9">
			    <div className="row">

				    <div className="col-sm-12">

				        <div className="well">

				            <div className="row">

					              <div className="col-sm-9">

					              		{console.log(this.props.jobs, "----")};

						               
						               <h2> Network Engineer </h2> 
						               <p> Facebook </p> 
						               <p>
							               <span className="css-1r756hp">
							               		<img width="12" height="12" src="https://d30y4n1t170mxu.cloudfront.net/assets/img/job-listing/employer-location-ico.svg" />
							               	</span>
							               <span>Sacramento, CA Posted 2 hours ago</span>
						               </p>
						               <p><b> Salary: </b> $50k p.a </p> 
						               <p><b> Employee Type: </b> Full Time </p> 
						               <p><b> Posted Date: </b> 10 Days Ago </p> 
						               <p><b> Job link: </b><a href='"+val.jobLink+"' target='_blank' >"https://www.glassdoor.com/Job/jobs.htm?sc.keyword=construction&locT=S&locId=2280&locKeyword=California&srs=RECENT_SEARCHES" /></a></p>

					              </div>

					              <div className="col-sm-3">
					                 <img src="https://media.glassdoor.com/sql/298515/cagwin-and-dorward-squarelogo.png" className="img-circle" height="100" width="100" alt="Avatar" />   
					              </div>			 

					            </div>
				            </div>
				        </div>
				    </div> 
			    </div>
		);
	}
}

export default SearchResults;
