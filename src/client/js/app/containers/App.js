import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function App({ children }) {
  return (
    <div>
      <h2>App</h2>
      {children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
