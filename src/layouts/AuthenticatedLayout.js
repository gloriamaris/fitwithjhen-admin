import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../components/Navigation'

const AuthenticatedLayout = props => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Navigation />
      </Grid>
      <Grid item xs={9}>
        {props.children}
      </Grid>
    </Grid>
  )
}

export default AuthenticatedLayout