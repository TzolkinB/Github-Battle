// import React from 'react';
// import ReactDOM from 'react-dom';
// import routes from ('.config/routes');
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// class HelloWorld extends React.Component{
// 	render() {
// 		return (
// 			<div> Hello World this is {this.props.name}</div>
// 		)
// 	}
// };

ReactDOM.render(routes, document.getElementById('app'));