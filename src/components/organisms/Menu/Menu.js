/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import MenuMobile from '../../molecules/MenuMobile';
import MenuDesktop from '../../molecules/MenuDesktop';

function Menu({ items, media }) {
  if (media.md) {
    return <MenuMobile items={items} />;
  }
  return <MenuDesktop items={items} />;
}
Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};
Menu.defaultProps = {
  items: PropTypes.arrayOf(),
};
export default Menu;
