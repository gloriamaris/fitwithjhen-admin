import { Stack } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const buttonStyles = {
  active: {
    backgroundColor: '#E2ACA6',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    textTransform: 'none',
    color: '#362F2E',
    fontWeight: 500,
    fontSize: '1.25rem',
    textDecoration: 'none',
    paddingLeft: '0.75rem',
    borderRadius: '.5rem'
  },
  inactive: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    textTransform: 'none',
    color: '#362F2E',
    fontWeight: 500,
    fontSize: '1.25rem',
    textDecoration: 'none',
    paddingLeft: '0.75rem'
  }
}

const Navigation = props => {
  const { active, inactive } = buttonStyles

  const menuLinks = [
    {
      name: 'Users',
      value: 'users'
    },
    {
      name: 'Guided Program',
      value: 'guided-program'
    },
    {
      name: 'Notifications',
      value: 'notifications'
    },
    {
      name: 'Habits',
      value: 'habits',
    },
    {
      name: 'Articles',
      value: 'articles',
    }
  ]

  return (
    <Stack>
      {
        menuLinks.map((item, i) =>
          <NavLink
            to={`/${item.value}`}
            style={({ isActive }) =>
              isActive ? active : inactive
            }
            key={i}
            exact
          >
            {item.name}
          </NavLink>
        )
      }
    </Stack>
  )
}

export default Navigation
