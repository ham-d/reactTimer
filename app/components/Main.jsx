//stateless Component
var React = require("react");
var Navigation = require("Navigation");

// var Main = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <Nav />
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

//es6 method:
var Main = (props) => {
    return (
        <div>
            <Navigation />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
//no need for this(this.props) because props is being passed as an argument already

module.exports = Main;