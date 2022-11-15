import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import Alert from '@mui/material/Alert';


const theme = createTheme();

export default function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  // const [emailError, setEmailError] = useState(false);
  // const [passError, setPassError] = useState(false);
  // const [userError, setUserError] = useState(false);
  const [alert, setAlert] = useState(null);

  const [errorHelp, setErrorHelp] = useState({user:'', email:'', password:''});


  const handleFormSubmit = async event => {
    event.preventDefault();

    if (!emailValidation(formState.email)){
      setErrorHelp({...errorHelp, email: 'Invalid email' });
      return
     } else {
      setErrorHelp({...errorHelp, email: '' });
     }

     if (!passwordValidation(formState.password)){
      setErrorHelp({...errorHelp, password: `Passwords must have at least 8 characters and 
                                             contain: uppercase letters, lowercase letters, 
                                             numbers, and symbols.`
      })
      return
     }

    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email, password: formState.password,
          username: formState.username
        }
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      if (e.message.match(/E11000/g)) {
        setAlert('Seems that you are already registered.')
      } else {
        setAlert('');
      }
    }
  };

  const emailValidation = email => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regex.test(email) === false){
        return false;
    }
    return true;
  }


  const passwordValidation = password => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!password || regex.test(password) === false){
      return false;
    }
    return true;
  }


  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3, mb: 18 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              {alert && <Alert sx={{ mb: 3 }} severity="error">{alert}</Alert>}
                <TextField
                  autoComplete="username"
                  name="username"
                  error={errorHelp.user.length ? true : false}
                  helperText={errorHelp.user}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={errorHelp.email.length ? true : false}
                  helperText={errorHelp.email}
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={errorHelp.password.length ? true : false}
                  helperText={errorHelp.password}
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}