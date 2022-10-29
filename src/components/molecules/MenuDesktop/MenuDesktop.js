import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuDesktop({ items }) {
  return (
    <div className="menu">
      {items.map((item) => (
        <div key={item.title}>
          <Link className="menu-item" href={item.link} to={item.link} onClick={(e) => e.preventDefault}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

MenuDesktop.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};
MenuDesktop.defaultProps = {
  items: PropTypes.arrayOf(),
};
export default MenuDesktop;
