import {
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
  Stack,
  Select
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Panel from '../../components/Panel'
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'
import format from 'date-format'
import PrimaryButton from '../../components/PrimaryButton'

const CreateProgram = () => {
  const [expanded, setExpanded] = useState('panel1')
  const [frequency, setCurrency] = useState(3)
  const [autoSaveDisplay, setAutoSaveDisplay] = useState('none')
  const [trainingType, setTrainingType] = useState('HIIT')
  const [muscleGroup, setMuscleGroup] = useState('lower_body')

  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']

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

  useEffect(() => {
    if (autoSaveDisplay === 'flex') {
      setTimeout(() => setAutoSaveDisplay('none'), 1000)
    }
  }, [autoSaveDisplay])

  const handleChangeFrequency = event => {
    setCurrency(event.target.value)
  }

  const handleChange = () => {
    setExpanded('' ? '' : false)
  }

  const inputChange = e => {
    setTimeout(() => setAutoSaveDisplay('flex'), 2000)
  }

  const handleTrainingType = async event => {
    await setTrainingType(event.target.value)
    await inputChange()
  }
  const handleMuscleGroup = async event => {
    await setMuscleGroup(event.target.value)
    await inputChange()
  }

  const renderWeeklyForms = (title, i) => {
    return (
      <Box key={i}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          mb={3}
          mt={3}
        >
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
          <Stack
            direction='row'
            spacing={1}
            alignItems='center'
            display={autoSaveDisplay}
          >
            <CheckCircleIcon color='success'></CheckCircleIcon>
            <Typography variant='caption' display='block' color='green'>
              Autosaved!
            </Typography>
          </Stack>
        </Stack>
        <Panel
          expanded={expanded === 'panel1'}
          onChange={() => handleChange('panel1')}
          title={title}
        >
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Training Type
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Training Type'
                onChange={handleTrainingType}
                value={trainingType}
              >
                <MenuItem value='HIIT'>
                  High Intensity Interval Training (HIIT)
                </MenuItem>
                <MenuItem value='circuit'>Circuit Training</MenuItem>
                <MenuItem value='emom'>
                  Every Minute, On the Minute (EMOM)
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Muscle Group
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Muscle Group'
                onChange={handleMuscleGroup}
                value={muscleGroup}
              >
                <MenuItem value='lower_body'>Lower Body</MenuItem>
                <MenuItem value='upper_body'>Upper Body</MenuItem>
                <MenuItem value='core'>Core</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id='standard-basic'
                label='Video URL'
                variant='outlined'
                onInput={inputChange}
              />
            </FormControl>
          </Stack>
        </Panel>
      </Box>
    )
  }

  return (
    <AuthenticatedLayout>
      <Grid container spacing={2}>
        {/*Sub Header*/}
        <Grid item xs={12}>
          <Typography textAlign='left' variant='body2'>
            <Link
              style={{ textDecoration: 'none', color: '#0842a0' }}
              to='/guided-program'
            >
              &#8592; Go Back
            </Link>
          </Typography>
          <Typography variant='h4' align='left'>
            Create Program
          </Typography>
        </Grid>

        <Grid item xs={7} mb={3}>
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
                textAlign: 'left'
              }}
            >
              <FormControl sx={{ m: 1 }} fullWidth>
                <TextField
                  id='outlined-multiline-static'
                  label='Multiline'
                  multiline
                  rows={4}
                  defaultValue='Enter notes here'
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
        <Grid item xs>
          <Panel title='Selected Habits' expanded={true} collapsible='true'>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label='Complete workout session'
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label='10 mins stretching on off-days'
              />
            </FormGroup>
          </Panel>
        </Grid>
        <Grid item xs={7} mb={3}>
          {weeks.map((title, i) => renderWeeklyForms(title, i))}
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  )
}

export default CreateProgram
