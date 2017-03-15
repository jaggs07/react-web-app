import React from 'react';
import NavBar from './NavBar'
import style from './style'

var margin = {
	marginTop : style.marginTop
}


class App extends React.Component {
   render() {
      return (
      	<div>

      		<div><NavBar /></div>

	       <FormComponent />
	    </div>
      );
   }
}



class FormComponent extends React.Component{

	render(){

		return(

			<form>
			<section>

				<div className="row">

 					 <div className="col-xs-8 col-sm-4">

  							<div className="form-group">
		 					       <label for="usr" id="job_label">Job Title:</label>
		   						   <input type="text" className="form-control" placeholder="Enter job title or keywords" id="title"/>
							</div>
 					 </div>

 					 <div className="col-xs-8 col-sm-4">
  							<div className="form-group">
		   				 	   <label for="usr" id="location_label">Location:</label>
		      					<input type="text" className="form-control" placeholder="Enter country, state or city" id="loc"/>
				     		</div>
 					</div>

 					<div className="clearfix visible-xs-block"></div>
  							<div className="col-xs-6 col-sm-4">
  								<div className="form-group">
		    						  <button style = {margin} type="submit" id="search_selected" className="btn btn-primary btn-findJobs">Find Jobs</button> 
								</div>
 							 </div>
					</div>
				</section>
			</form>
		);
	}
}

export default App;