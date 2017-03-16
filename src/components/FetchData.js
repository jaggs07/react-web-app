// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

// class FetchDemo extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: []
//     };
//   }

// var backEndUrl= {'http://54.234.23.64:8080'};

// componentDidMount: function() {
//     	$.ajax({
//   				 	  url:backEndUrl+'/search/jobs?location='+location+'&title='+jobTitle,
  				 	  
//   				 	  dataType:"json",
//   				 	  contentType:"application/json",
//   				 	  async: false,
//   				  	 error: function() {
//   				 	     $('#info').html('<p>An error has occurred</p>');
  			
//   				 	 },
//   				  	 success: function(data){
//   				  	 	if(data.length==0){
//   			              alert("Incorrect title or location value");
//   			              $(document).find('#loadin-btn').css('display','none');;
//   			              var misspelledMessage="Please enter the correct value for job title and location";
//   			              $('.event-list').append("<p>"+misspelledMessage+"</p>");
  			
  			
//   				  	 	}
//   				  		  var resultReterived =[];
//   				  		  $.each(data,function(key, val){
//   							var job ={};
  			
//   				  		   $.each(val, function (index, data) {
  				  		   	 
//   				  		   		if(index == "title"){
//   					  		   			job.title =data;
//   				  		   		}
//   				  		   		if(index == "location"){
//   					  		   			job.location =data;
//   				  		   		}
//   				  		   		if(index == "companyName"){
//   					  		   			job.companyName =data;
//   				  		   		} 
//   				  		   		if(index == "date"){
//   					  		   			job.date =data;
//   				  		   		}
//   				  		   		 if(index == "title"){
//   					  		   			job.title =data;
//   				  		   		}
//   				  		   		if(index == "partnerSite"){
//   					  		   			job.partnerSite =data;
//   				  		   		}
//   				  		   		if(index == "jobLink"){
//   					  		   			job.jobLink =data;
//   				  		   		}
  						        
  			
//   						    });
//   				  		   resultReterived.push(job);
//   				  		  });
//   				  		  	$(document).find('#loadin-btn').css('display','none');
//   				  		   $.each(resultReterived,function(key, val){
//   				  		   		var resultElm ="<div class='info'>"+
//   				  		   		                "<h2 class='title'>"+val.title+"</h2>"+
//   				  		   		                "<p class='company_name'><b>Company: </b>"+val.companyName+"</p>"+
//   				  		   		                "<p class='location'><b>Location: </b>"+val.location+"</p>"+
//   				  		   		                "<p class='partner_site'><b>Partner site: </b> "+val.partnerSite+"</p>"+
//   				  		   		                "<p class='date'><b>Date: </b>"+val.date+"</h2>"+
//   				  		   		                "<p class='job_link'><b>Job link: </b><a href='"+val.jobLink+"' target='_blank' >"+val.jobLink+"</a></p>"+
//   				  		   		              	"</div>";
//   				  		   		       $('.event-list').append(resultElm);
//   				  		   });
  				  		 
//   				  		 },
//   				   type: 'GET'
//   				});
//   		}
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
      });
  }

  render() {
    return (
      <div>
        <h1>Job Search</h1>
        {console.log(this.props.posts, "inside fetch data")};

        <ul>

        	{this.state.posts.map(function(post){

        		return ( <li>{post.title}</li>);
        	})}

          
        </ul>
      </div>
    );
  }
}

export default FetchData;
