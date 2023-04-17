import { Typography } from '@mui/material'
import React from 'react'
import Top from '../centerComponent/Top'
import Bottom from '../centerComponent/Bottom'

function CenterAddNew() {
    return (
        <Typography variant='div' component="div" sx={{
            width: "100%",
            minHeight: "55vh",
            background: "#012939",
            marginTop: "25px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "30px 40px"
        }}>

            <Top />
            <Bottom />

        </Typography>
    )
}

export default CenterAddNew
