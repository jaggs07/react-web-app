import React, { Component } from 'react';

var imagePath = '../../img.logo.png';
export class NavBar extends Component {

	render() {

		return (
				<nav className="navbar navbar-inverse">
  					<div className="container-fluid">
   						 <div className="navbar-header">
     							 <img width="100" role="presentation" height="50" src= {'http://getrake.io/wp-content/uploads/2016/08/RakeLogoWebsite.png" alt="Rake" title="Rake" class="original_logo  show_logo'} />
     							 <p>Search Jobs </p>
   						 </div>
 					</div>
				</nav> 
		);
	}
}

export default NavBar;
