import React from 'react'
import { Button, styled } from '@mui/material'

const ActiveButton = styled(Button)({
  textTransform: 'none',
  backgroundColor: '#E2ACA6',
  color: '#362F2E',
  '&:hover': {
    backgroundColor: '#E2ACA6',
    opacity: '90%',
    color: '#362F2E',
    borderColor: '#0062cc',
  },
})

const PrimaryButton = props => {
  return <ActiveButton {...props}>{props.children}</ActiveButton>
}

export default PrimaryButton
