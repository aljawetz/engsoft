import React from "react";
import { Container } from "./style";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginScreen() {
  return (
    <Container>
        <form action="/" method="post">
          
          <TextField 
            name="username" 
            label="Coloque seu usuário" 
            variant="outlined"
          ></TextField>

          <Button type="submit" variant="contained">Logar</Button>
      </form>
    </Container>
  );
}

export default LoginScreen;
