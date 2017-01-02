import React from 'react';
import acss from '../utils/acss';
import { tasksDataPending } from '../actions/AppActions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    tasks: state.app.getIn(['tasks'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTasksDataPending: () => dispatch(tasksDataPending())
  };
}

export class List extends React.Component {
  componentWillMount() {
    console.log("list props", this.props)
    this.props.onTasksDataPending();
  }

  render() {
    const attrs = {
      div: {
        className: acss('Bgc(white)', 'M(5%)', 'P(5%)', 'Bdrs(5px)', 'Bxsh(headerBoxShadow)')
      },
      h1: {
        className: acss('Fw(lr)', 'Fz(1.5em)', 'Fz(1.75em)--sm', 'Mb(gutter)', 'Mt(0)', 'Mx(a)')
      },
      ul: {
        className: acss('D(f)', 'Fld(c)')
      }
    };

    return (
      <div {...attrs.div}>
        <h1 {...attrs.h1}>Tasks:</h1>
        <ul {...attrs.ul}>
          <li>Task 1</li>
          <li>Task 2</li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
