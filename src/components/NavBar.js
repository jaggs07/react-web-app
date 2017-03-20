import React from 'react';

var NavBar = React.createClass ({

	render() {

		return (
				<nav className="navbar navbar-default">
  					<div className="container-fluid">
  						<span>
	   						 <div className="navbar-header" >
	   						    <a href="https://getrake.io/">
	     							 <img id= "logo-header" src= {'http://getrake.io/wp-content/uploads/2016/08/RakeLogoWebsite.png'} alt="Rake" title="Rake" className="original_logo  show_logo" />
	   						 	</a>
	   						 </div>
	   						 <p className="site-info" > Search Jobs </p>
   						 </span>
 					</div>
				</nav> 
		);
	}
});

module.exports = NavBar;
