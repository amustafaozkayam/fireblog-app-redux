import { Avatar, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import { getBlogWithId } from '../redux/actions/BlogActions';

const UpdateBlog = () => {
  const { id } = useParams();
  const card = useSelector(state => state.blogReducer.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!card) {
      dispatch(getBlogWithId(id));
    }
  }, [dispatch]);

  return (
    <div style={{ marginTop: '6rem' }}>
      <Stack justifyContent='center' alignItems='center'>
        <Avatar variant='square' alt={card?.title} src={card?.imageURL} sx={{ width: { xs: 450, sm: 500, md: 500 }, height: 300 }} />
      </Stack>'
      <Typography className='background double' style={{ fontFamily: 'Mullish' }} variant='h4' align='center' sx={{ my: 2, color: '#046582' }}>
        <span className='span'>
          <span style={{ fontSize: '3rem' }}>U</span>
          PDATE
          <span style={{ fontSize: '3rem' }}> B</span>
          LOG
        </span>
      </Typography>
      <Grid container justifyContent='center' alignItems='flex-start'>
        <Grid item xs={12} sm={8} md={4}>
          <BlogForm card={card} />
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateBlog;
