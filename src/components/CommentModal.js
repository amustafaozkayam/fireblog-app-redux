import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, ButtonGroup, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Timestamp } from 'firebase/firestore';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCommentBlog } from '../redux/actions/BlogActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#f5f5f5',
  border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  fontFamily: 'Mullish',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const CommentModal = ({ input, setInput, open, setOpen, card, user }) => {
  const dispatch = useDispatch();

  //! ADD COMMENT
  const addComment = async e => {
    e.preventDefault();

    await dispatch(addCommentBlog({ id: card.id, timestamp: Timestamp.now(), creator: user.email, text: input }));

    setInput('');
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={e => setOpen(false)}>
      <Box sx={{ ...style, width: 400 }}>
        <Typography className='background double' style={{ fontFamily: 'mullish' }} variant='h6' align='center' sx={{ my: 2, color: '#046582' }}>
          <span className='span'>COMMENT</span>
        </Typography>
        <TextField label='Comment' color='secondary' placeholder='Please type your comments...' value={input} onChange={event => setInput(event.target.value)} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1
            }
          }}
        >
          <ButtonGroup variant='text' aria-label='text button group'>
            <Button color='error' variant='contained' onClick={e => setOpen(false)} endIcon={<CancelIcon/>}> 
              Cancel
            </Button>
            <Button variant='contained' color='primary' disabled={!input} onClick={addComment} endIcon={<SendIcon />}>
              Send
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommentModal;
