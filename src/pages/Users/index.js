import React from 'react'
import { Box, Button, Grid, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'User Name', width: 300 },
  { field: 'gender', headerName: 'Gender', width: 80 },
  { field: 'workout_program', headerName: 'Workout Program', width: 250 },
  { field: 'duration', headerName: 'Duration', width: 270 },
  { field: 'active', headerName: 'Active', width: 130 },
  { field: 'actions', headerName: 'Actions', width: 130 },
];

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
  },
];

const Users = () => {
  console.log('users here')
  return (
    <AuthenticatedLayout>
      <Box mt={5} />
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography
            variant='h4'
            align='left'
            gutterBottom>
            Users
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            size='large'
            variant="contained"
            color='info'
            sx={{
              textTransform: 'none'
            }}
            disableElevation
            fullWidth>
            Add new user
          </Button>
        </Grid>
      </Grid>

      <div style={{ width: '91.5%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {
                  columns.map(item => 
                    <TableCell
                      key={item.field}
                      align="left">
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
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.username}</TableCell>
                  <TableCell align="left">{row.gender}</TableCell>
                  <TableCell align="left">
                    <Link
                      style={{
                        color: '#0842A0',
                        textDecorationColor: '#0842A0',
                        fontWeight: '500'
                      }}
                      href={`${row.workout_program}`}
                    >Guided Program</Link>
                  </TableCell>
                  <TableCell align="left">{row.duration}</TableCell>
                  <TableCell align="left">{row.active}</TableCell>
                  <TableCell align="left" colSpan={2}>
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
                        color: '#A2254C',
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