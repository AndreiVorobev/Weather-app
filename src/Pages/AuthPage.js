import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AuthPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
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
          onClick={register}
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
