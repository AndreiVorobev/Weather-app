import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useHistory } from "react-router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getAuth } from "firebase/auth";

function AuthPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const history = useHistory();

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        history.push("/weatherpage");
      });
    }
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
          height: 200,
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
      </Paper>
    </Box>
  );
}

export default AuthPage;
