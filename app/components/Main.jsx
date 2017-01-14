import React from 'react';
var Nav = require('Nav');
var Footer = require('Footer');
var LogoLeft = require('LogoLeft');
var LogoRight = require('LogoRight');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Countdown = require('Countdown');
var Controls = require('Controls');

import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';


export var Main = React.createClass({
	onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  render : function(){
    return (
      <div className="font main">
        <Nav />
				<div className="page-actions">
					<a href="#" onClick={this.onLogout}>Logout</a>
				</div>
          <div className="row" id="logorow">
						<div className="columns medium-3 columns small-centered">
						<LogoLeft />
					</div>
            <div className="columns medium-6 large-4 small-centered">
							<Countdown />
            </div>
						<div className="columns medium-3 medium-centered">
						<LogoRight />
					</div>
          </div>
        <Footer />
      </div>
    );
  }
});

// module.exports = Main;
export default Redux.connect()(Main);
