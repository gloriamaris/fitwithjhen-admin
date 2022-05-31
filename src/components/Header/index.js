import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircle from '@mui/icons-material/AccountCircle'
import React from 'react'

const Header = () => {
  const menuId = 'primary-search-account-menu'
  const handleProfileMenuOpen = () => console.log('hi')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        color='secondary'
      >
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              display: {
                xs: 'none',
                sm: 'block'
              }
            }}
          >
            FITWITHJHEN
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
              <Badge badgeContent={4} color='error'>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
            >
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
