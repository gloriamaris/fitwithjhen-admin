import React from 'react'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import { styled, Typography } from '@mui/material'

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #A56971`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#A56971' }} />
    }
    {...props}
  />
))(({ theme }) => ({
  color: '#A56971',
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : '#FAF2F1',
  // flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #A56971'
}))

const Panel = props => {
  

  return (
    <Accordion
      {...props}
    >
      <AccordionSummary 
        aria-controls='panel1d-content'
        id='panel1d-header'
        expandIcon={ 
          !props.collapsible ? <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#A56971' }} /> : null
        }
        >
        <Typography fontWeight='medium'>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {props.children}
      </AccordionDetails>
    </Accordion>
  )
}

export default Panel
