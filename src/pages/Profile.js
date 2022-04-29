import { Avatar, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import image from '../assets/1.jpg';

const Profile = () => {
  const user = useSelector(state => state.userReducer.user);
  console.log(user);

  return (
    <Grid container alignItems='center' justifyContent='center' mt={10}>
      <Grid item xs={10} md={8} sm={10} alignItems='center' justifyContent='center'>
        <Card sx={{ maxWidth: 1180 }}>
          <CardMedia component='img' height='300' image={image} alt='green iguana' />
          <Stack justifyContent='center' alignItems='center' mt={3} style={{ position: 'absolute', top: '280px', left: '55%' }}>
            {user?.photoURL ? <Avatar alt={user.displayName} src={user.photoURL} sx={{ width: 150, height: 150 }} /> : <Avatar alt={user.displayName.toUpperCase()} src='/static/images/avatar/2.jpg' sx={{ width: 150, height: 150 }} />}
          </Stack>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' mt={8}>
              Display Name
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {user?.displayName}
            </Typography>
            <Typography gutterBottom variant='h5' component='div' mt={2}>
              Country
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Turkey
            </Typography>
            <Typography gutterBottom variant='h5' component='div' mt={2}>
              Email
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {user?.email || null}
            </Typography>
            <Typography gutterBottom variant='h5' component='div' mt={2}>
              Joined At
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {user?.metadata.creationTime || null}
            </Typography>
            <Typography gutterBottom variant='h5' component='div' mt={2}>
              Last Sign In Time
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {user?.metadata.lastSignInTime || null}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
