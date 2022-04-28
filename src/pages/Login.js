import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signIn, signinWithEmail } from '../helpers/Functions';
import GoogleIcon from "@mui/icons-material/Google";


const signUpValidationSchema = Yup.object().shape({

  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .matches(/\d+/, 'Password must have a number')
    .matches(/[a-z]+/, 'Password must have a lowercase')
    .matches(/[A-Z]+/, 'Password must have a uppercase')
    .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char')
});

function Login() {
  // const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: ''
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.userReducer.loading);
  // console.log(loading);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(signinWithEmail(values, navigate));

    resetForm();
    // navigate('/');
  };

  const signInGoogle = () => {
    dispatch(signIn(navigate));
  };

  return (
    <div className='auth'>
      <Container
        sx={{
          marginTop: '5rem',
          // mt: 6,
          height: 'calc(80vh -3rem)',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '3rem',
          borderRadius: '20px'
        }}
        maxWidth='sm'
      >
        <Avatar
          sx={{
            margin: '1rem auto',
            bgcolor: 'primary.main'
            // bgcolor: blue[500],
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography sx={{ margin: '1rem' }} variant='h4'>
          LOGIN
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signUpValidationSchema}
        >
            {({
            values,
            handleChange,
            handleSubmit,
            touched,
            errors,
            handleBlur
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField name='email' label='Email' variant='outlined' value={values.email} onChange={handleChange} onBlur={handleBlur} helperText={touched.email && errors.email} error={touched.email && Boolean(errors.email)} fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='password' label='Password' type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} helperText={touched.password && errors.password} error={touched.password && Boolean(errors.password)} fullWidth />
                </Grid>
                <Grid item xs={12}>
                  {loading ? (
                    <CircularProgress color='secondary' />
                  ) : (
                    <>
                      <Button type='submit' variant='contained' color='primary' fullWidth style={{ marginBottom: '1rem' }}>
                        LOGIN
                      </Button>

                      <Button color='primary'
                       fullWidth onClick={() => signInGoogle()} endIcon={<GoogleIcon />} variant='contained'>
                        Google Sign In
                        {/* <img src={logo} alt=""  style={{width:'20px', height:'20px'}}/> */}
                      </Button>
                    </>
                  )}
                </Grid>
                <Grid container justifyContent='flex-end'>
                  <p>
                    Don't have an account yet?
                    <Link
                      sx={{
                        textDecoration: 'none',
                        fontWeight: '600',
                        paddingLeft: '0.5rem',
                        cursor: 'pointer'
                     }}
                      onClick={() => navigate('/register')}
                    >
                      Register
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Login;
