import { Typography } from '@mui/material'
import React from 'react'
import Top from './Top'

function CenterAddNew() {
  return (
    <Typography variant='div' component="div" sx={{
        width: "100%",
        minHeight: "25vh",
        background: "#012939",
        marginTop: "25px",
        borderTop: "10px solid #5c8308",
        borderRadius: "5px 0 0 0",
        padding: "30px 40px"
    }}>

        <Top />

    </Typography>
  )
}

export default CenterAddNew
