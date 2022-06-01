import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const AuthenticatedLayout = props => {
  return (
    <>
      <Container
        disableGutters
        maxWidth='false'
      >
        <Header />
      </Container>
      <Grid container spacing={9}>
        <Grid item xs={3}>
          <Navigation />
        </Grid>
        <Grid item xs={9}>
          {props.children}
        </Grid>
      </Grid>
    </>
  )
}

export default AuthenticatedLayout
