import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CollapsiblePanel from '../../components/CollapsiblePanel'
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'

const CreateProgram = () => {

  return (
    <AuthenticatedLayout>
      <Box mt={5} />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4' align='left' gutterBottom>
            Create Program
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <CollapsiblePanel />
        </Grid>
        <Grid item xs={4}>
          <CollapsiblePanel />
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  )
}

export default CreateProgram