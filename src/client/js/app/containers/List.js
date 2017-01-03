import React from 'react';
import acss from '../utils/acss';
import { tasksDataPending } from '../actions/AppActions';
import { connect } from 'react-redux';
import Task from '../components/Task';
import { Link } from 'react-router';

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
      list: {
        className: acss('D(f)', 'Fld(c)')
      }
    };

    function renderTasks(tasks) {
      return tasks.map((task) => {
        return(
          <Task key={task.id} task={task}></Task>
        )
      })
    }

    return (
      <div {...attrs.div}>
        <h1 {...attrs.h1}>Tasks:</h1>
        <Link to={"/tasks/new"}>
          New Task
        </Link>
        <ol {...attrs.list}>
          {renderTasks(this.props.tasks)}
        </ol>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
