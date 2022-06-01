import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Panel from '../../components/Panel'
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'
import format from 'date-format'
import PrimaryButton from '../../components/PrimaryButton'

const CreateProgram = () => {
  const [expanded, setExpanded] = useState('panel1')
  const [frequency, setCurrency] = useState(3)

  const currencies = [
    {
      value: 3,
      label: '3x'
    },
    {
      value: 4,
      label: '4x'
    },
    {
      value: 5,
      label: '5x'
    },
    {
      value: 6,
      label: '6x'
    }
  ]

  const handleChangeFrequency = event => {
    setCurrency(event.target.value)
  }

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <AuthenticatedLayout>
      <Box mt={5} />
      <Grid container>
        <Grid item xs={12}>
          <Typography textAlign='left' variant='body2'>
            <Link
              style={{ textDecoration: 'none', color: '#0842a0' }}
              to='/guided-program'
            >
              &#8592; Go Back
            </Link>
          </Typography>
          <Typography variant='h4' align='left' gutterBottom>
            Create Program
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <div style={{ width: '98%' }}>
            <Panel expanded={true} collapsible='true' title='Program Details'>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
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
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '30%',
                  textAlign: 'left'
                }}
              >
                <FormControl sx={{ m: 1 }} fullWidth>
                  <TextField
                    id='outlined-select-currency'
                    select
                    label='Frequency'
                    value={frequency}
                    onChange={handleChangeFrequency}
                  >
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  textAlign: 'left',
                }}
              >
                <FormControl sx={{ m: 1 }} fullWidth>
                  <TextField
                    id='outlined-multiline-static'
                    label='Multiline'
                    multiline
                    rows={4}
                    defaultValue='Default Value'
                  />
                </FormControl>
              </Box>
              <Box
                mt={2}
                textAlign='right'
              >
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
          </div>
          <Box mt={3} />
          <div style={{ width: '98%' }}>
            <Panel
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              title='Day 1'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Panel>
            <Panel
              title='Day 2'
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Panel>
            <Panel
              title='Day 3'
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Panel>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Panel title='Selected Habits' expanded={true} collapsible='true'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Panel>
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  )
}

export default CreateProgram
