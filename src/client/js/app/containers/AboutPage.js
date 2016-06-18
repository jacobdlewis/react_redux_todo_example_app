import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function AboutPage() {
  return (
    <div>
      About
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutPage);
