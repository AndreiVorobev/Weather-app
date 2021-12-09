import { useState } from "react";
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
  const navigate = useNavigate();

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
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
          id="email"
          label="Email"
          variant="standard"
        />
        <TextField
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
          id="password"
          label="Password"
          variant="standard"
        />
        <Button
          onClick={login}
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
