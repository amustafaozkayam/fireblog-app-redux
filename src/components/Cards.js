import { Grid, LinearProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../redux/actions/BlogActions';
import BlogCard from './BlogCard';
import PaginatedItems from '../components/Paginate';
const Cards = () => {
  // console.log(cards);

  const cards = useSelector(state => state.blogReducer.blogData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);
  // console.log(cards);

  return !cards ? (
    <LinearProgress color='inherit' />
  ) : (
    <Grid container rowSpacing={4} columnSpacing={{ sm: 5, md: 4 }} alignItems='stretch' spacing={3}>
      {cards?.map(card => (
        <Grid item key={card.id} xs={12} md={4} sm={6} justifyContent='center'>
          <BlogCard card={card} />
          {/* <PaginatedItems cards={cards} /> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
