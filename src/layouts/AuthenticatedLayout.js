import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../components/Navigation'
import Users from '../pages/Users'

const AuthenticatedLayout = props => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Navigation />
      </Grid>
      <Grid item xs={9}>
        <Users />
      </Grid>
    </Grid>
  )
}

export default AuthenticatedLayout