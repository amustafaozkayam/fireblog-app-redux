import { Button, Paper, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Timestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBlog, updateBlog } from '../redux/actions/BlogActions';

const paper = {
  padding: 10
}
const form = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'

}
const fileInput = {
  width: '97%',
  margin: '10px 0'
}

const buttonSubmit = {
  marginBottom: '10px',
  '&:hover': {
    background: '#aec8bf',
    color: '#126d88'
}
}
const BlogForm = ({ card }) => {
  const [blogData, setBlogData] = useState({
    id: '',
    title: '',
    imageURL: '',
    content: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    if (card) {
      setBlogData(card);
    }
  }, [card]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (card?.id) {
      await dispatch(updateBlog({ ...blogData, id: card.id, timestamp: Timestamp.now() }));
    } else {
      await dispatch(createBlog({ ...blogData, email: user?.email, timestamp: Timestamp.now(), uid: user?.uid }));
    }
    navigate('/');
  };

  return (
    <Paper style={paper}>
      <form autoComplete='off' 
      noValidate style={form}
       onSubmit={handleSubmit}>
        <TextField name='title' 
        variant='outlined' 
        label='Title *' 
        fullWidth value={blogData.title} 
        onChange={e => setBlogData({ ...blogData, title: e.target.value })}
        style={{marginBottom:'8px'}} />
        <TextField name='imageURL'
         variant='outlined' 
         label='Image URL *' 
         fullWidth value={blogData.imageURL} 
         onChange={e => setBlogData({ ...blogData, imageURL: e.target.value })} 
         style={{marginBottom:'8px'}}/>
        <TextField name='content' 
        variant='outlined' 
        label='Content *' 
        fullWidth value={blogData.content} 
        onChange={e => setBlogData({ ...blogData, content: e.target.value })} multiline rows={10} />
        <Button style={buttonSubmit}
        sx={{ bgcolor: grey[800] }} 
        variant='contained' size='medium' type='submit' fullWidth>
          {blogData.id ? 'UPDATE' : 'SUBMIT'}
        </Button>
      </form>
    </Paper>
  );
};

export default BlogForm;
