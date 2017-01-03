import React from 'react';
import acss from '../utils/acss';

const Task = (props) => {
  
  const task = props.task
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


export default Task;
