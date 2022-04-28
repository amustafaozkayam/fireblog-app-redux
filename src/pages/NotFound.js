import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Typography className='caption' variant='h4' align='center' sx={{ my: 2, color: '#046582' }} style={{ marginTop: '5rem' }}>
      Page not found. Please go to <NavLink to='/'>Home Page</NavLink>...
    </Typography>
  );
};

export default NotFound;
