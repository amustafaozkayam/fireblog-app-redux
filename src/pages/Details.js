import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, Card, CardActions, CardContent, CardMedia, Container, Grid, Grow, IconButton, LinearProgress, List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CommentModal from '../components/CommentModal';
import Comments from '../components/Comments';
import Likes from '../components/Likes';
import { deleteBlog, getBlogWithId } from '../redux/actions/BlogActions';

const Details = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const card = useSelector(state => state.blogReducer.blog);
  // console.log(card);
  const user = useSelector(state => state.userReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogWithId(id));
  }, [dispatch, input]);

  return (
    <>
      {card === null ? (
        <LinearProgress style={{ marginTop: '5rem' }} color='inherit' />
      ) : (
        <>
          <Typography className='background double' style={{ fontFamily: 'Mullish', marginTop: '6.5rem' }} variant='h4' align='center' sx={{ my: 2, color: '#046582' }}>
            <span className='span'>Details</span>
          </Typography>
          <Grow in>
            <Container>
              <Grid container justify='center' alignItems='stretch' spacing={3}>
                <Grid item xs={12} sm={12} md={12}>
                  <Card sx={{ maxWidth: 1200 }}>
                    <CardMedia component='img' height='500' image={card.imageURL} title={card.title} />
                    <CardContent style={{ backgroundColor: '#e7e6f5' }}>
                      <Typography variant='h4' color='text.primary' mb={2} mt={2} align='center' style={{ color: '#046582', fontFamily: 'Permanent Marker' }}>
                        {card.title.toUpperCase()}
                      </Typography>
                      <Typography variant='h6' color='text.secondary' align='center' style={{ fontFamily: 'Architects Daughter', fontWeight: '900' }}>
                        {card.date.toDate().toLocaleDateString()}
                      </Typography>
                      <Typography variant='body1' color='text.primary' style={{ fontFamily: 'Architects Daughter' }}>
                        {card.content}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography variant='h5' gutterBottom>
                        <IconButton sx={{ p: 0 }}>
                          <Avatar alt={card.email.toUpperCase()} src='/static/images/avatar/2.jpg' />
                        </IconButton>
                        &nbsp; {card.email} &nbsp;
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <div>
                        <IconButton size='small' color='error' disabled={!user} onClick={() => {}} aria-label='add to favorites'>
                          <Likes card={card} user={user} />
                        </IconButton>
                        <IconButton size='small' disabled={!user} onClick={e => setOpen(true)} aria-label='comment'>
                          <ChatBubbleOutlineIcon fontSize='large' />
                          &nbsp; {card.comments?.length || 0}
                        </IconButton>
                      </div>
                      {user?.uid === card?.uid && (
                        <div>
                          <IconButton style={{ fontSize: '0.8em', color:'green' }} size='medium' onClick={() => navigate(`/update-blog/${card.id}`)} aria-label='share'>
                            <EditIcon fontSize='large' />
                            &nbsp; EDIT &nbsp;
                          </IconButton>
                          <IconButton style={{ fontSize: '0.8em', color: 'red' }} size='medium'  onClick={() => dispatch(deleteBlog(card.id, navigate))} aria-label='share'>
                            <DeleteIcon fontSize='large' />
                            &nbsp; DELETE &nbsp;
                          </IconButton>
                        </div>
                      )}
                    </CardActions>
                  </Card>
                </Grid>
                <Typography style={{ fontFamily: 'Mullish', marginLeft: '30px' }} variant='h6' sx={{ color: '#046582', mt: 2 }}>
                  COMMENTS
                </Typography>
                {!card.comments ? (
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography style={{ fontFamily: 'Mullish' }} variant='body2' sx={{ color: '#046582' }}>
                      No comments yet...
                    </Typography>
                  </Grid>
                ) : (
                  <Grid item xs={12} sm={12} md={12}>
                    {card.comments.map(comment => (
                      <List sx={{ width: '100%', maxWidth: 1180, bgcolor: 'background.paper' }}>
                        <Comments comment={comment} key={comment.createdAt} />
                      </List>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Container>
          </Grow>
          <CommentModal input={input} setInput={setInput} open={open} setOpen={setOpen} user={user} card={card} />
        </>
      )}
    </>
  );
};

export default Details;
