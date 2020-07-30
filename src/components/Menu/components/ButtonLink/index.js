import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ href, className, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>

  );
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ButtonLink;
