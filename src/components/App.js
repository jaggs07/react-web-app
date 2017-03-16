import React from 'react';
import NavBar from './NavBar'
import BodyContainer from './BodyContainer'
import Footer from './Footer'
import FetchData from './FetchData'

class App extends React.Component {
   render() {
      return (
      	<div>
			<NavBar />
      		<BodyContainer>
      		</BodyContainer>
      		<Footer />
            <FetchData />

	    </div>
      );
   }
}


export default App;