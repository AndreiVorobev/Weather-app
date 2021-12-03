import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate('/weatherpage');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 20,
          width: 200,
          height: 300,
        },
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          p: 10,
        }}
      >
        <h2>Log in</h2>
        <TextField
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
          id='standard-basic'
          label='Email'
          variant='standard'
        />
        <TextField
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
          id='standard-basic'
          label='Password'
          variant='standard'
        />
        <Button
          onClick={login}
          variant='contained'
          sx={{
            m: 5,
          }}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
}

export default LoginPage;
