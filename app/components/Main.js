//import React from 'react';
var React = require('react');

// class Main extends React.Components{
// 	render() {
// 		return (
// 			<div>
// 				Hello from Main!
// 				{this.props.children}
// 			</div>
// 		)
// 	}
// };


var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
      	{/* Hello from Main! */}
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;