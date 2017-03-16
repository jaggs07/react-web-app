import React, { Component } from 'react';

class SideBar extends Component {
	render() {
		return (
			    <div className="col-sm-3">

				    <div className="well">

				        <p><b>Partner Sites</b></p>

				        <div className="checkbox">
				          <label>
				            <input type="checkbox" /> Indeed
				          </label>
				          <label>
				            <input type="checkbox" /> ZipRecruiter
				          </label>
				          <label>
				            <input type="checkbox" /> Jobs2Careers
				          </label>
				        </div>

				    </div>

				     <div className="well">

				        <p><b>Sort By</b></p>
				        <select className="selectpicker">
				          <option>Relevance</option>
				          <option>Date</option>
				        </select>


				    </div>
				      <div className="well">
				        <p><b>Posted</b></p>
			                <select className="selectpicker">
			                     <option> AnyTime </option>
			                     <option> Within 1 Day </option>
			                     <option> Within 3 Day </option>
			                     <option> Within 7 Day </option>
			                     <option> Within 15 Day </option>
			                </select>
				      </div>

				      <div className="well">
				        <p><b>Distance</b></p>
			                <select className="selectpicker">
			                     <option> Anywhere </option>
			                     <option> Within 5 Miles </option>
			                     <option> Within 10 Miles </option>
			                     <option> Within 15 Miles </option>
			                     <option> Within 25 Miles </option>
			                     <option> Within 50 Miles </option>
			                     <option> Within 100 Miles </option>
			                </select>
				      </div>
			</div>	
    );
	}
}


export default SideBar;