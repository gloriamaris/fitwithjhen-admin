import React from 'react'
import { Button, Grid, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField,Stack,InputAdornment,MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Title', width: 300 },
  { field: 'duration', headerName: 'Subject', width: 270 },
  { field: 'active', headerName: 'Active', width: 130 },
  { field: 'actions', headerName: 'Actions', width: 130 }
]

const rows = [
  {
    id: 1,
    username: 'EXERCISE IS NOT JUST FOR WEIGHT LOSS!',
    gender: 'F',
    workout_program: 'Generic',
    duration: 'Studies have shown that exercising regularly produces benefits such as sharper thinking, less depression and anxiety, better sleep, help with weight management, stronger bones and muscles, and reduced risks of heart disease, stroke, diabetes and cancers of the breast, the colon and...',
    active: 'Yes'
  },
  {
    id: 2,
    username: 'CONSISTENCY IS EVERYTHING',
    gender: 'M',
    workout_program: 'Generic',
    duration: 'Start small, and gradually increase in speed, repetitions, and duration over time. Don\'t even think about your fitness goals. Just focus on trying to be better at showing up for yourself everyday...',
    active: 'Yes'
  },
  {
    id: 3,
    username: '6 TIPS TO HELP YOU IN YOUR MINDFUL EATING JOURNEY',
    gender: 'M',
    workout_program: 'Generic',
    duration: '1) Don\'t wait until you are overly hungry to eat. If you are in a primal hunger state you are less likely to be able to recognize and honor your signs of fullness...',
    active: 'Yes'
  },
  {
    id: 4,
    username: 'Start and maintain your exercise plan!',
    gender: 'F',
    workout_program: 'Generic',
    duration: 'It is not uncommon for your initial enthusiasm to fade over time. For example, if you\'re getting bored with the treadmill, try walking outdoors and get your music or podcast on...',
    active: 'Yes'
  }
]

const Articles = () => {
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
            Explore
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
            Add new article
          </Button>
        </Grid>
      </Grid>
      <div>
        <Stack direction="row" spacing={1} mb={2}>
          <TextField
            placeholder='Search habits'
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

export default Articles
