var React = require('react');
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
// var Main = require('./components/Main') but shortcutted through webpack;
var Main = require('Main');
var Countdown = require("Countdown");
var Timer = require("Timer");


//load foundation
$(document).foundation();

//app css
//style!, css!, sass! are loaders, helps with bundling
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path='/' component={Main}>
            <Route path="countdown" component={Countdown} />
            <IndexRoute component={Timer} />
        </Route>
    </Router>, document.getElementById('app')
);