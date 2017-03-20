import React from 'react';
import NavBar from './NavBar'
import BodyContainer from './BodyContainer'

var App = React.createClass ({
   render() {
      return (
      	<div>
			<NavBar />
      		<BodyContainer />
	    </div>
      );
   }
});

module.exports = App;