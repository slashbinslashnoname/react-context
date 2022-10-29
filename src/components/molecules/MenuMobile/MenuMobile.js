import React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useHistory } from 'react-router-dom';

function MenuMobile({ className, items }) {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="false"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: 'white' }} />
      </Button>
      <Menu
        id="fade-menu"
        className={className}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {items.map((item) => (
          <MenuItem key={item.title} onClick={() => history.push(item.link) || handleClose()}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
MenuMobile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  className: PropTypes.func,
};
MenuMobile.defaultProps = {
  className: PropTypes.func,
};

export default MenuMobile;
