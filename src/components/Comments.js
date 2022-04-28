import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import React from 'react';

const Comments = ({ comment }) => {
  // console.log(comment);

  return (
    <>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt={comment.creator.toUpperCase()} src='/static/images/avatar/2.jpg' 
          sx={{ bgcolor: deepOrange[500] }} />
        </ListItemAvatar>
        <ListItemText
          primary={comment.creator}
          secondary={
            <React.Fragment>
              <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                {moment(comment.createdAt.toDate()).fromNow()}
              </Typography>
              {`  -  ${comment.text}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </>
  );
};

export default Comments;
