import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Greeting from './Greeting';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Greeting />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
    app: state.app,
  };
}

export default connect(mapStateToProps)(Dashboard);
