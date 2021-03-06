var React = require('react');
var {Link} = require('react-router');
var Nav = require('Nav');
var Footer = require('Footer');
var LogoLeft = require('LogoLeft');
var LogoRight = require('LogoRight');


import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';

export var Gameroom = React.createClass({
	onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  render() {
    return (
			<div className="font main">
        <Nav />
				<div className="page-actions">
					<a href="#" onClick={this.onLogout}>Logout</a>
				</div>
					<div className="row">
						<div className="columns medium-3 columns small-centered">
						<LogoLeft />
					</div>
            <div className="columns medium-6 large-4 small-centered">
							<p>lots of words and shit goes here.....</p>
            </div>
						<div className="columns medium-3 medium-centered">
						<LogoRight />
					 </div>
          </div>
        <Footer  />
      </div>
    );
  }
});

// module.exports = Gameroom;
export default Redux.connect()(Gameroom);
