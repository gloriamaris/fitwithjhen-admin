import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const buttonStyles = {
  active: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    textTransform: 'none',
    fontSize: '1.25rem',
    backgroundColor: '#E2ACA6',
    fontWeight: 500,
    color: '#362F2E',
    justifyContent: 'flex-start'
  },
  inactive: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    textTransform: 'none',
    color: '#362F2E',
    fontWeight: 500,
    fontSize: '1.25rem',
    justifyContent: 'flex-start'
  }
}

const Navigation = props => {
  const [activeMenu, setActiveMenu] = useState('users')
  const { active, inactive } = buttonStyles
  const navigate = useNavigate()

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
      value: 'guided-program',
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
    }
  ]
  console.log({ props })
  const handleClick = value => {
    navigate('/' + value)
    setActiveMenu(value)
  }

  return (
    <>
      <Box mt={5} />
      {
        menuLinks.map((item, i) =>
          <Box key={i} ml={2} mr={2} mt={2} mb={2}>
            <Button
              color='primary'
              variant='text'
              onClick={() => handleClick(item.value)}
              sx={activeMenu === item.value ? { ...active } : { ...inactive }}
              {...buttonProps}
            >
              {item.name}
            </Button>
          </Box>
        )
      }
    </>
  )
}

export default Navigation
