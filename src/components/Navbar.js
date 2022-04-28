import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import özkaya from '../assets/özkaya.png';
import usersvg from '../assets/user.svg';
import { getUser, signOutAPI } from '../helpers/Functions';
import './Navbar.css'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'green',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));




const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <AppBar className='appbar' position="fixed" sx={{ height:'92px', display:'flex', }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
          >
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Avatar
                alt="Bank Logo"
                src={özkaya}
                sx={{ width: { xs: 80, sm: 80, md: 80 }, height: 80, marginTop: { xs: "0.5rem", sm: "0.5rem", md: "0.5rem" } }}
              />
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Typography
              className="title"
                // style={{ fontFamily: "Permanent Marker" }}
                variant="h3"
                sx={{
                  my: 1,
                  color: "white",
                  display: { xs: "flex", md: "flex" },
                  fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" },
                }}
              >
                FireBlog App
              </Typography>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {user?.displayName ? (
                <Typography
                  variant="body1"
                  sx={{ color: "white", display: "block"}}
                  // style={{ fontFamily: "girassol" }}
                  className="user-name"
                >
                  {user?.displayName.split(" ")[0].toUpperCase()}
                </Typography>
              ) : (
                ""
              )}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                 {user ? ( 
                  <Stack direction="row" spacing={2}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar
                        alt=''
                        src={user.photoURL || "/static/images/avatar/2.jpg"}
                        sx={{ bgcolor: blue[500] }}
                      />
                    </StyledBadge>
                  </Stack>
                   ) : (
                    <Avatar alt='' src={usersvg} />
                  )}
                </IconButton>
              </Tooltip>
            </div>
            <Menu
              sx={{ mt: "45px", font: "girassol" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user?.displayName ? (
                <div>
                              
                  <MenuItem onClick={() => navigate(`/profile/${user.uid}`)}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/new-blog")}>New</MenuItem>
                  <MenuItem onClick={() => dispatch(signOutAPI(navigate))}>
                    Logout
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                  <MenuItem onClick={() => navigate("/register")}>
                    Register
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
