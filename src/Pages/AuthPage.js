import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class Authpage extends React.Component {
  render() {
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
          <TextField id="standard-basic" label="User name" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button
            variant="contained"
            sx={{
              m: 5,
            }}>
            Log in
          </Button>
        </Paper>
      </Box>
    );
  }
}

export default Authpage;
