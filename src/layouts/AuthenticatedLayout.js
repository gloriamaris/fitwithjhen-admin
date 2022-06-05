import React from 'react'
import { Grid } from '@mui/material'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const AuthenticatedLayout = props => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={3} pl={3}>
          <Navigation />
        </Grid>
        <Grid item xs={9} px={10}>
          {props.children}
        </Grid>
      </Grid>
    </>
  )
}

export default AuthenticatedLayout
