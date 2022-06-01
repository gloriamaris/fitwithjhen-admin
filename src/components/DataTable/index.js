import { Button, ButtonGroup, styled } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const PageButton = styled(Button)({
  borderColor: '#362F2E',
  color: '#362F2E',
  textTransform: 'none'
})

const DataTable = props => {

  const buttons = [
    <PageButton variant='text' key="prev" disabled>Prev</PageButton>,
    <PageButton variant='text' key="one">1</PageButton>,
    <PageButton variant='text' key="two">2</PageButton>,
    <PageButton variant='text' key="three">3</PageButton>,
    <PageButton variant='text' key="four">4</PageButton>,
    <PageButton variant='text' key="five">5</PageButton>,
    <PageButton variant='text' key="next">Next</PageButton>,
  ];

  const Pagination = () => (
    <Box textAlign='right' mt={1}>
      <ButtonGroup size="small" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  )

  return (
    <div style={{ width: '91.5%' }}>
      {props.children}
      {props.hasPagination && <Pagination />}
    </div>
  )
}

export default DataTable