import { Container, Grid, Grow, Typography } from '@mui/material';
import React from 'react';
import Cards from '../components/Cards';


const Dashboard = () => {

   return (
    <>
      <Typography className='background double' variant='h4' style={{marginTop: '6.5rem', marginBottom:'3rem'}} align='center' sx={{ my: 2, color: '#046582' }}>
        <span style={{ font: 'Mullish'}} className='span'>Dashboard</span>
      </Typography>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
              <Cards />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Dashboard;
