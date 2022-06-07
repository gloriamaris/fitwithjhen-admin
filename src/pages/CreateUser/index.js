import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Panel from '../../components/Panel'
import PrimaryButton from '../../components/PrimaryButton'
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'
import format from 'date-format'

const CreateUser = props => {
  const [gender, setGender] = useState('female')

  const handleGender = event => setGender(event.target.value)

  return (
    <AuthenticatedLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography textAlign='left' variant='body2'>
            <Link
              style={{ textDecoration: 'none', color: '#0842a0' }}
              to='/users'
            >
              &#8592; Go Back
            </Link>
          </Typography>
          <Typography variant='h4' align='left'>
            Add New User
          </Typography>
        </Grid>
        <Grid item xs={7} mb={3}>
          <Panel expanded={true} collapsible='true' title='Program Details'>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '70%' }}>
              <FormControl sx={{ m: 1 }} fullWidth>
                <InputLabel htmlFor='outlined-adornment-amount'>
                  User Name
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-amount'
                  inputProps={{ type: 'text' }}
                  value=''
                  onChange={() => console.log('he')}
                  label='User Name'
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Training Type
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Training Type'
                  onChange={handleGender}
                  value={gender}
                  name='gender'
                >
                  <MenuItem value='female'>Female</MenuItem>
                  <MenuItem value='male'>Male</MenuItem>
                  <MenuItem value='none'>Prefer not to say</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth>
                <InputLabel htmlFor='outlined-adornment-amount'>
                  Workout Program
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-amount'
                  inputProps={{ type: 'text' }}
                  value=''
                  onChange={() => console.log('he')}
                  label='User Name'
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth>
                <InputLabel htmlFor='outlined-adornment-amount'>
                  Start Date
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-amount'
                  inputProps={{ type: 'date' }}
                  value={`${format.asString('yyyy-MM-dd', new Date())}`}
                  onChange={() => console.log('he')}
                  label='Amount'
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth>
                <InputLabel htmlFor='outlined-adornment-amount'>
                  End Date
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-amount'
                  inputProps={{ type: 'date' }}
                  value={`${format.asString('yyyy-MM-dd', new Date())}`}
                  onChange={() => console.log('he')}
                  label='Amount'
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='Active'
                />
              </FormControl>
            </Box>
            <Box mt={2} textAlign='right'>
              <PrimaryButton size='large' sx={{ width: '20%' }}>
                Submit
              </PrimaryButton>
              <Button
                size='large'
                variant='text'
                sx={{ width: '20%', color: '#362F2E', textTransform: 'none' }}
              >
                Cancel
              </Button>
            </Box>
          </Panel>
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  )
}

export default CreateUser
