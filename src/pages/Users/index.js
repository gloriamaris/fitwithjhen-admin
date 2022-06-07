import React from 'react'
import { Button, Grid, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField,Stack,InputAdornment,MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'User Name', width: 300 },
  { field: 'gender', headerName: 'Gender', width: 80 },
  { field: 'workout_program', headerName: 'Workout Program', width: 250 },
  { field: 'duration', headerName: 'Duration', width: 270 },
  { field: 'active', headerName: 'Active', width: 130 },
  { field: 'actions', headerName: 'Actions', width: 130 }
]

const rows = [
  {
    id: 1,
    username: 'shaina_ceniza@yahoo.com',
    gender: 'F',
    workout_program: 'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'May 1, 2022 to June 5, 2022',
    active: 'Yes'
  },
  {
    id: 2,
    username: 'jerlabor@gmail.com',
    gender: 'M',
    workout_program: 'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'May 1, 2022 to June 5, 2022',
    active: 'Yes'
  },
  {
    id: 3,
    username: 'chitcharonko@gmail.com',
    gender: 'M',
    workout_program: 'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'May 1, 2022 to June 5, 2022',
    active: 'Yes'
  },
  {
    id: 4,
    username: 'annemendoza@gmail.com',
    gender: 'F',
    workout_program: 'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'May 1, 2022 to June 5, 2022',
    active: 'Yes'
  },
  {
    id: 5,
    username: 'adrian.pacon@peerless.com',
    gender: 'M',
    workout_program: 'https://www.notion.so/EJ-s-Guided-Program-fc9aa124e2c04348b99987ae66bf892b',
    duration: 'May 1, 2022 to June 5, 2022',
    active: 'Yes'
  }
]

const Users = () => {
  const navigate = useNavigate()
  
  return (
    <AuthenticatedLayout>
      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid item>
          <Typography
            variant='h4'
            align='left'
            gutterBottom
          >
            Users
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
            onClick={() => navigate('/users/create')}
            disableElevation
            fullWidth
          >
            Add new user
          </Button>
        </Grid>
      </Grid>
      <div>
        <Stack direction="row" spacing={1} mb={2}>
          <TextField
            placeholder='Search user'
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
            <TableHead>
              <TableRow>
                {
                  columns.map(item =>
                    <TableCell
                      key={item.field}
                      align='left'
                    >
                      {item.headerName}
                    </TableCell>
                  )
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left'>{row.id}</TableCell>
                  <TableCell align='left'>{row.username}</TableCell>
                  <TableCell align='left'>{row.gender}</TableCell>
                  <TableCell align='left'>
                    <Link
                      style={{
                        color: '#0842A0',
                        textDecorationColor: '#0842A0',
                        fontWeight: '500'
                      }}
                      href={`${row.workout_program}`}
                    >Guided Program
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
    </AuthenticatedLayout>
  )
}

export default Users
