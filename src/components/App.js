import React from 'react';
import NavBar from './NavBar'
import BodyContainer from './BodyContainer'
import Footer from './Footer'

class App extends React.Component {
   render() {
      return (
      	<div>
			   <NavBar />
      		<BodyContainer />
      		<Footer />
	    </div>
      );
   }
}

export default App;