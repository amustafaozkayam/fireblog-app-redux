import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Avatar, Card, CardActions, CardContent, CardMedia, IconButton, Typography,CardHeader } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { infoNote } from '../helpers/ToastNotify';
import { getBlogWithId, likeBlog } from '../redux/actions/BlogActions';
import CommentModal from './CommentModal';
import Likes from './Likes';
import { deepOrange, deepPurple } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect } from 'react';
import { getUser} from '../helpers/Functions';

const BlogCard = ({ card }) => {
  console.log(card.date.toDate().toString().slice(4, 25))
 
  const user = useSelector(state => state.userReducer.user);
 
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState('');
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    dispatch(getUser());
  }, []);


  const showDetail = () => {
    if (user) {
      dispatch(getBlogWithId(card.id));
      navigate(`/detail/${card.id}`);
    } else {
      navigate('login');
      infoNote('Please Login for blog details!!');
    }
  };

  const handleLiked = () => {
    if (user) {
      dispatch(likeBlog(card.id, user.uid));
      setLiked(!liked);
      }
  };

  return (
    <>
      <Card sx={{ maxWidth: 825 }} style={{borderRadius: '8px'}}>
          <div className='transform'>
          <CardMedia style={{ cursor: 'pointer' }} 
          height='200' component='img' 
          image={card.imageURL} 
          title={card.title} 
          onClick={showDetail} />
          <CardContent style={{ backgroundColor: '#e7e6f5', 
          cursor: 'pointer', height: '12rem' }} 
          onClick={showDetail}>
            <Typography variant='h5' 
            color='text.primary' mb={2} 
            style={{ color: '#046582', 
            font: 'Mullish' }}>
              {card.title.toUpperCase()}
            </Typography>
            <Typography variant='body1' color='text.secondary' 
            style={{ font: 'Mullish', fontWeight: '700' }}>
              {card.date.toDate().toString().slice(4, 21)}
            </Typography>
            <Typography variant='body2'
             color='text.primary' className='line-clamp' 
             style={{ font: 'Mullish' }}>
              {card.content}
            </Typography>
          </CardContent>
        </div>
        <CardContent>
          <Typography variant='body1' gutterBottom>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt={card.email.toUpperCase()} src='/static/images/avatar/2.jpg'
               sx={{ bgcolor: deepPurple[600] }} 
               />
            </IconButton>
            &nbsp; {card.email} &nbsp;
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{display : 'flex', justifyContent:'space-between' }}>
          <IconButton style={{ fontSize: '0.8em', cursor: 'pointer' }} size='small' color='error' disabled={!user} onClick={handleLiked} aria-label='add to favorites'>
            <Likes card={card} user={user} />
          </IconButton>
          <IconButton style={{ fontSize: '0.8em', cursor: 'pointer' }} size='small' disabled={!user} onClick={e => setOpen(true)} aria-label='comment'>
            <ChatBubbleOutlineIcon />
            &nbsp; {card.comments?.length || 0}
          </IconButton>
          <IconButton aria-label="page visited">
            <VisibilityIcon/>
            <span style={{ fontSize: '0.8em', cursor: 'pointer' }}>
              {card.view?.length || 0}
            </span>
          </IconButton>
        </CardActions>
      </Card>
      <CommentModal input={input} setInput={setInput} open={open} setOpen={setOpen} user={user} card={card} />
    </>
  );
};

export default BlogCard;

