<<<<<<< HEAD
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useHistory } from "react-router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useHistory();
=======
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
>>>>>>> cdae5a72bcdf86f3dd76bc88ff377036157215ed

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
<<<<<<< HEAD
      history.push("/weatherpage");
=======
      navigate('/weatherpage');
>>>>>>> cdae5a72bcdf86f3dd76bc88ff377036157215ed
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
