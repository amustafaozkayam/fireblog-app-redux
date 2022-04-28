import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth, provider } from './Firebase';
import { successNote } from './ToastNotify';
import { setUserAction, setLoading } from '../redux/actions/UserActions';

export const signupWithEmail = (values, navigate) => {
  return async dispatch => {
    dispatch(setLoading(true));
   
    const displayName = values.username;
    try {
     
      let user = await createUserWithEmailAndPassword(auth, values.email, values.password);
     
      await updateProfile(auth.currentUser, { displayName: displayName });
      dispatch(setUserAction(auth.currentUser));
      dispatch(setLoading(false));
      navigate('/');
      successNote('Logged in successfully!');
    } catch (err) {
      alert(err.message);
      dispatch(setLoading(false));
    }
  };
};


export const signinWithEmail = (values, navigate) => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
        let user = await signInWithEmailAndPassword(auth, values.email, values.password);
      dispatch(setUserAction(user.user.auth.currentUser));
      dispatch(setLoading(false));
      navigate('/');
      successNote('Logged in successfully!');
    } catch (err) {
      alert(err.message);
      dispatch(setLoading(false));
    }
  };
};


export const signIn = navigate => {
  return async dispatch => {
    dispatch(setLoading(true));
    signInWithPopup(auth, provider)
      .then(payload => {
        // console.log(payload);
        dispatch(setUserAction(payload.user));
        dispatch(setLoading(false));
        navigate('/');
        successNote('Logged in successfully!');
        dispatch(setLoading(false));
      })
      .catch(err => alert(err.message));
    dispatch(setLoading(false));
  };
};


export const getUser = () => {
  return dispatch => {
    onAuthStateChanged(auth, user => {
      // console.log(user);
      if (user) {
        dispatch(setUserAction(user));
      } else {
        console.log('user not found');
      }
    });
  };
};


export const signOutAPI = navigate => {
  return dispatch => {
    signOut(auth)
      .then(() => {
        dispatch(setUserAction(null));
        navigate('/');
        successNote('Logged out!');
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};



