import React, { Component } from 'react';

var imagePath = '../../img.logo.png';
export class NavBar extends Component {

	render() {

		return (
				<nav className="navbar navbar-inverse">
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
}

export default NavBar;
