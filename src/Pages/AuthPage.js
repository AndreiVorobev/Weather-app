import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AuthPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  const handleAction = () => {
    const authentication = getAuth();

    createUserWithEmailAndPassword(
      authentication,
      registerEmail,
      registerPassword
    ).then((response) => {
      sessionStorage.setItem(
        "Auth Token",
        response._tokenResponse.refreshToken,
        console.log(response)
      );
      navigate("/");
    });
  };

  return (
    <Box
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
        <h2>Register now</h2>
        <TextField
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        <Button
          onClick={handleAction}
          variant="contained"
          sx={{
            m: 5,
          }}>
          Register
        </Button>
        <Link to="/">already have an account?</Link>
      </Paper>
    </Box>
  );
}

export default AuthPage;
