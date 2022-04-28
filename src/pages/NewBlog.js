import { Avatar, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import blogImg from '../assets/blok.png';
import BlogForm from '../components/BlogForm';

const NewBlog = () => {
  return (
    <div style={{ marginTop: '7rem' }}>
      <Avatar style={{ margin: 'auto' }} sx={{ bgcolor: grey[800], width: 240, height: 240 }}>
        <img style={{ borderRadius: '50%' }} src={blogImg} alt='new blog' />
      </Avatar>
      <Typography className='background double' style={{ fontFamily: 'Mullish' }} variant='h4' align='center' sx={{ my: 2, color: '#046582'}}>
        <span className='span'>
          <span style={{ fontSize: '3rem' }}>N</span>
          EW
          <span style={{ fontSize: '3rem' }}> B</span>
          LOG
        </span>
      </Typography>
      <Grid container justifyContent='center' alignItems='flex-start'>
        <Grid item xs={12} sm={8} md={4}>
          <BlogForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewBlog;
