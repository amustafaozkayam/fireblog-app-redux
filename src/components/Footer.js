import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "1rem",
    // position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%"
  };

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
   
      <Box style={style}>
        <Container maxWidth="sm" sx={{textAlign: 'center'}} position='fixed'> 
        <Link href="https://github.com/amustafaozkayam" 
        target='_blank' rel="noopener" 
        underline="none"><GitHubIcon color="secondary" sx={{ height: 32, width: 32, margin:'0.5rem' }}/>
        </Link>
        <Link href="https://www.linkedin.com/in/mustafa-ozkaya/" 
        target='_blank' rel="noopener" 
        underline="none"><LinkedInIcon color="secondary" sx={{ height: 32, width: 32, margin:'0.5rem' }}/>
        </Link>
          <Copyright />
        </Container>
      </Box>
  );
}

export default Footer