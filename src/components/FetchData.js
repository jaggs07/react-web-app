import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchResults from './SearchResults'

class FetchData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://54.234.23.64:8080/search/jobs?location=california&title=engineer`)
      .then(res => {
        this.setState({ posts: res.data });
        console.log(this.state.posts,"data.....");
        if(res instanceof Error) {
             console.log(res.message);
         } else {
             console.log(res.data,"error message");
         }
      });
  }

  render() {
    return (
      <SearchResults jobs= {this.state.posts} />
    );
  }
}

export default FetchData;
