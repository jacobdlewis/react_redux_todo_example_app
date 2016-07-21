import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/DashboardActions';

function mapStateToProps(state) {
  return {
    app: state.app,
    loading: state.app.loading
  };
}

function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => dispatch(fetchData())
	};
}

class Home extends React.Component {
	componentDidMount() {
    this.props.fetchData();
	}

  render() {
    const { app, loading } = this.props;

    const loadingContent = loading ? 'YAY!' : null;

    return (
      <div>
        <h2>Home!!!! {loadingContent}</h2>

        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
