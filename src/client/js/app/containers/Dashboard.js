import React from 'react';
import { connect } from 'react-redux';

import Greeting from '../components/Greeting';

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
    app: state.app,
  };
}

function mapDispatchToProps() {
  return {};
}

function Dashboard() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
