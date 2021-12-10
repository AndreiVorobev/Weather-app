import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setLoginEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Email is not correct");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setLoginPassword(e.target.value);
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!re.test(loginPassword)) {
      setPasswordError("password is not correct");
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
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
        <h2>Log in</h2>

        <TextField
          value={loginEmail}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => emailHandler(e)}
          error={emailDirty}
          helperText={emailError}
          name="email"
          label="Email"
          variant="standard"
        />
        <TextField
          value={loginPassword}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => passwordHandler(e)}
          error={passwordDirty}
          helperText={passwordError}
          name="password"
          label="Password"
          variant="standard"
        />
        <Button
          onClick={login}
          disabled={!formValid}
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
