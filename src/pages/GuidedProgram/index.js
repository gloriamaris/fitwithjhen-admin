import {
  Button,
  Grid, InputAdornment,
  Link, MenuItem,
  Paper, Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, TextField,
  Typography
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'
import SearchIcon from '@mui/icons-material/Search'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'frequency', headerName: 'Frequency', width: 80 },
  { field: 'workout_program', headerName: 'Workout Program', width: 250 },
  { field: 'duration', headerName: 'Duration', width: 270 },
  { field: 'active', headerName: 'Active', width: 130 },
  { field: 'actions', headerName: 'Actions', width: 130 }
]

const rows = [
  {
    id: 1,
    name: "Shaina's Workout Program",
    frequency: '4x',
    workout_program:
      'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'May 1, 2022 to June 5, 2022',
    active: 'Yes'
  },
  {
    id: 2,
    name: "John's Guided Program",
    frequency: '5x',
    workout_program:
      'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'May 5, 2022 to June 9, 2022',
    active: 'Yes'
  },
  {
    id: 3,
    name: "Chit's Resistance Training",
    frequency: '3x',
    workout_program:
      'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'Feb 9, 2022 to Mar 16, 2022',
    active: 'Yes'
  },
  {
    id: 4,
    name: "Anne's Yoga Program",
    frequency: '4x',
    workout_program:
      'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'Jan 17, 2021 to Feb 24, 2021',
    active: 'No'
  },
  {
    id: 5,
    name: "Adrian's Guided Program",
    frequency: '4x',
    workout_program:
      'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'May 29, 2021 to Jun 7, 2021',
    active: 'No'
  }
]

const GuidedProgram = () => {
  const navigate = useNavigate()

  return (
    <AuthenticatedLayout>
      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid item>
          <Typography variant='h4' align='left' gutterBottom>
            Guided Program
          </Typography>
        </Grid>
        <Grid item>
          <Button
            size='large'
            variant='contained'
            color='info'
            sx={{
              textTransform: 'none'
            }}
            onClick={() => navigate('/guided-program/create')}
            disableElevation
            fullWidth
          >
            Create program
          </Button>
        </Grid>
      </Grid>
      <div>
        <Stack direction="row" spacing={1} mb={2}>
          <TextField
            placeholder='Search program'
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }}
            size={'small'}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Filter by"
            size={'small'}
            sx={{width:'10%'}}
          >
            <MenuItem>
              Username
            </MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Sort by"
            size={'small'}
            sx={{width:'10%'}}
          >
            <MenuItem>
              Username
            </MenuItem>
          </TextField>
        </Stack>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead
              sx={{
                backgroundColor: '#F6F8FC'
              }}
            >
              <TableRow>
                {columns.map(item => (
                  <TableCell key={item.field} align='left'>
                    {item.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left'>{row.id}</TableCell>
                  <TableCell align='left'>{row.name}</TableCell>
                  <TableCell align='left'>{row.frequency}</TableCell>
                  <TableCell align='left'>
                    <Link
                      style={{
                        color: '#0842A0',
                        textDecorationColor: '#0842A0',
                        fontWeight: '500'
                      }}
                      href={`${row.workout_program}`}
                    >
                      Guided Program
                    </Link>
                  </TableCell>
                  <TableCell align='left'>{row.duration}</TableCell>
                  <TableCell align='left'>{row.active}</TableCell>
                  <TableCell align='left' colSpan={2}>
                    <Link
                      style={{
                        color: '#0842A0',
                        textDecoration: 'none',
                        marginRight: '1rem'
                      }}
                      href={`${row.workout_program}`}
                    >
                      Edit
                    </Link>
                    <Link
                      style={{
                        color: '#A2254C'
                      }}
                      href={`${row.workout_program}`}
                    >
                      Delete
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/*<DataTable hasPagination>*/}
      {/*  */}
      {/*</DataTable>*/}
    </AuthenticatedLayout>
  )
}

export default GuidedProgram
