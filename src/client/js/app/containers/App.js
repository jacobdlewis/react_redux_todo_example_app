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
      { children }
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
