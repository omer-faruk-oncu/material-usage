import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const TextFieldComp = () => {
  const[err,setErr] = useState(false)
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container
      maxWidth="md"
      align="center"
      sx={{ border: "1px solid red", display: "flex", flexDirection: "column" }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        margin="normal"
        color="success"
        helperText={err && "Yanlış email girdiniz"}
        type="email"
        error={err}
        required
        onFocus={() => setErr(true)}
        onBlur={() => setErr(false)}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        margin="normal"
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        margin="normal"
      />

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
              
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    </Container>
  );
};

export default TextFieldComp;
