import React from 'react';
import acss from '../utils/acss';

export default class Task extends React.Component {
  
  render() {
    const task = this.props.task
    const attrs = {
      task: {
        className: acss('Bgc(white)', 'M(1em)')
      }
    };

    return (
      <div  {...attrs.task}>
        <strong>
          {task.name}
        </strong>
        <div>
          {task.description}
        </div>
      </div>
    );
  }
}

