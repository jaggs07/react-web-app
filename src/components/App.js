import React from 'react';
import NavBar from './NavBar'
import BodyContainer from './BodyContainer'
import Footer from './Footer'

var App = React.createClass ({
   render() {
      return (
      	<div>
			   <NavBar />
      		<BodyContainer />
      		<Footer />
	    </div>
      );
   }
});

module.exports = App;