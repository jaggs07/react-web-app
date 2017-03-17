import React from 'react';

var Footer = React.createClass ({
	render() {
		return (
			<footer>
			      <div className="center">
				         <div className="pagination">
				             <a href="#">&laquo;</a>
				             <a href="#" class="active">1</a>
				             <a href="#">2</a>
				             <a href="#">3</a>
				             <a href="#">4</a>
				             <a href="#">5</a>
				             <a href="#">6</a>
				             <a href="#">&raquo;</a>
				         </div>
			      </div>
			</footer>
		);
	}
});

module.exports = Footer;
