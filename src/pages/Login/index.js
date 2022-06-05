import React from 'react'
import { Grid, TextField, Button, Stack, Typography,AppBar,Toolbar } from '@mui/material'
// eslint-disable-next-line

const Login = () => {
  return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        height="100vh">
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" fontWeight={'500'}>
                FITWITHJHEN
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2} py={10} px={4} sx={{ boxShadow: 3}}>
            <Typography variant="h4" gutterBottom component="div" textAlign={"center"} fontWeight={'bolder'}>
              FITWITHJHEN
            </Typography>
            <TextField id="outlined-basic" label="Username" variant="outlined"/>
            <TextField id="outlined-basic" label="Password" variant="outlined"/>
            <Button variant="contained" size={"large"}>Login</Button>
          </Stack>
        </Grid>
      </Grid>
  )
}

export default Login
