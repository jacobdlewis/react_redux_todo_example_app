import React from 'react';
import acss from '../utils/acss';
import HomeIcon from '../../../img/sprite/home.svg';

export default class Header extends React.Component {
  render() {
    const { isNotMobile } = this.props;
    const attrs = {
      header: {
        className: acss('Bxsh(headerBoxShadow)', 'D(f)', 'Flxs(0)', 'H(headerHeight)', 'Pos(r)', 'Z(zHead)'),
      },
      h1: {
        className: acss('My(0)', 'P(10)')
      },
      svg: {
        className: acss('M(10px)', 'Mt(15px)')
      }
    };

    return (
      <header {...attrs.header}>
        <svg {...attrs.svg}>
          <use xlinkHref={HomeIcon} />
        </svg>
    <h1 {...attrs.h1}>Odot</h1>
        {isNotMobile}
      </header>
    );
  }
}

Header.propTypes = {
  isNotMobile: React.PropTypes.bool.isRequired,
};
