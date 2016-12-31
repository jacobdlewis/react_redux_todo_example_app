import React from 'react';
import acss from '../utils/acss';

export default class List extends React.Component {
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
