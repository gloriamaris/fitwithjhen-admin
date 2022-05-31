import { Box, Button, Grid, styled } from '@mui/material'
import React, { useState, useEffect } from 'react'

const ActiveButton = styled(Button)({
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
  textTransform: 'none',
  fontSize: '1.25rem',
  backgroundColor: '#E2ACA6'
})

const InactiveButton = styled(Button)({
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
  textTransform: 'none',
  color: '#362F2E',
  fontSize: '1.25rem'
})


const buttonStyles = {
  active: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    textTransform: 'none',
    fontSize: '1.25rem',
    backgroundColor: '#E2ACA6',
    color: '#362F2E',
  },
  inactive: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    textTransform: 'none',
    color: '#362F2E',
    fontSize: '1.25rem'
  }
}

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState('users')
  const { active, inactive } = buttonStyles
  const buttonProps = {
    disableFocusRipple: true,
    disableRipple: true,
    disableElevation: true,
    fullWidth: true,
    size: 'large'
  }
  const menuLinks = [
    {
      id: 1,
      name: 'Users',
      value: 'users',
      isActive: true
    },
    {
      id: 2,
      name: 'Guided Program',
      value: 'guided_program',
      isActive: true
    },
    {
      id: 3,
      name: 'Notifications',
      value: 'notifications',
      isActive: true
    },
    {
      id: 4,
      name: 'Habits',
      value: 'habits',
      isActive: true
    },
    {
      id: 5,
      name: 'Articles',
      value: 'articles',
      isActive: true
    },
  ]

  const handleClick = value => {
    setActiveMenu(value)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box mt={5} />
        {
          menuLinks.map((item, i) =>
            <Box key={i} ml={2} mr={2} mt={2} mb={2}>
              <Button 
                color='primary'
                variant={'text'}
                onClick={() => handleClick(item.value)}
                sx={activeMenu === item.value ? { ...active } : { ...inactive }}
                {...buttonProps}
              >
                {item.name}
              </Button>


            </Box>
          )
        }
      </Grid>
      <Grid item xs={9}>
        10
      </Grid>
    </Grid>
  )
}

export default Navigation