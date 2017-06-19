var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Load css
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
  <p>boilerplate</p>,
  document.getElementById('app')
);
