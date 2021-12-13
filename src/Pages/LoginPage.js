// import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useInput } from "./hooks/useInput";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function LoginPage() {
  const email = useInput("", {
    isDirty: false,
    isEmpty: true,
    emailError: false,
  });
  const password = useInput("", { isEmpty: true, minLength: 7 });
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      sessionStorage.setItem(
        "Auth Token",
        user._tokenResponse.refreshToken,

        console.log("Auth Token")
      );

      navigate("/");

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 20,
          width: 200,
          height: 300,
        },
      }}>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          p: 10,
        }}>
        <Typography variant="h5">Log in</Typography>

        <TextField
          error={email.isDirty}
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          name="email"
          label="Email"
          variant="standard"
        />
        {email.isDirty && email.isEmpty && (
          <Typography
            color="red"
            variant="caption"
            display="block"
            gutterBottom>
            email can not be empty
          </Typography>
        )}
        {email.isDirty && email.emailError && (
          <Typography
            color="red"
            variant="caption"
            display="block"
            gutterBottom>
            incorrect email
          </Typography>
        )}
        <TextField
          error={password.isDirty}
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          name="password"
          label="Password"
          variant="standard"
        />
        {password.isDirty && password.isEmpty && (
          <Typography
            color="red"
            variant="caption"
            display="block"
            gutterBottom>
            password can not be empty
          </Typography>
        )}
        <Button
          onClick={login}
          disabled={!email.inputValid}
          variant="contained"
          sx={{
            m: 5,
          }}>
          Submit
        </Button>
        <Link to="/authpage">create an account</Link>
      </Paper>
    </Box>
  );
}

export default LoginPage;
