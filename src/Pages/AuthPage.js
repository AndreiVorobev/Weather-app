import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useInput } from "./hooks/useInput";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AuthPage() {
  const email = useInput("", {
    isDirty: false,
    isEmpty: true,
    isEmail: true,
    emailHelperTextError: "",
  });
  const password = useInput("", {
    isDirty: false,
    isEmpty: true,
    isPassword: true,
    passwordHelperTextError: "",
  });
  const navigate = useNavigate();

  const handleAction = () => {
    const authentication = getAuth();

    createUserWithEmailAndPassword(
      authentication,
      email.value,
      password.value
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
        <Typography variant="h5">Register now</Typography>
        <TextField
          error={email.isDirty && email.emailHelperTextError ? true : false}
          helperText={email.emailHelperTextError}
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          name="email"
          label="Email"
          variant="standard"
        />

        <TextField
          error={
            password.isDirty && password.passwordHelperTextError ? true : false
          }
          helperText={password.passwordHelperTextError}
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          name="password"
          label="Password"
          variant="standard"
        />

        <Button
          onClick={handleAction}
          disabled={!email.inputValid}
          variant="contained"
          sx={{
            m: 5,
          }}>
          Submit
        </Button>
        <Link to="/loginpage">Already have an account?</Link>
      </Paper>
    </Box>
  );
}

export default AuthPage;
