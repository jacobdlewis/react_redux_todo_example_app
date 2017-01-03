import React from 'react';
import acss from '../utils/acss';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import taskCreatePending from '../actions/AppActions';

const handleSubmit = (values) => {
  values.preventDefault();
  console.log("VALUES", values);
}

const TasksNew = (props) => {
  const contextTypes = {
    router: React.PropTypes.object
  }

  const attrs = {
    div: {
      className: acss('Bgc(white)', 'M(5%)', 'P(5%)', 'Bdrs(5px)', 'Bxsh(headerBoxShadow)')
    }
  };

  return (
    <div {...attrs.div}>
      <form onSubmit={handleSubmit}>
        <h3>Add a Task</h3>

        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text"/>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <Field name="description" component="input" type="text"/>
        </div>

        <button type="submit">
          Submit
        </button>
        <Link to="/">
          Back
        </Link>
      </form>
    </div>
  ) 
}

export default reduxForm({
  form: 'TasksNewForm'
})(TasksNew);