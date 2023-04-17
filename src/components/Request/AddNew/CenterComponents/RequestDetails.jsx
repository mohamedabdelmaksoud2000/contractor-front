import { FormControl, OutlinedInput, Typography } from '@mui/material'
import React from 'react'

function RequestDetails() {
    return (
        <Typography variant='div' component="div"
            sx={{
                background: "#012939",
                borderTop: "2px solid #7DB00E",
                color: "white",
                padding: "30px",
                marginBottom: "30px"
            }}
        >

            <Typography sx={{ fontSize: "30px", }}>
                Request details:
            </Typography>

            <Typography variant='div' component="div" sx={{ fontSize: "30px", }}>
                <FormControl sx={{ width: '100%'  }}>
                    <OutlinedInput sx={{border: "1px solid #ffffff8c" , height: "45px" , borderRadius: "7px !important"  }} placeholder="Title" />
                </FormControl>
            </Typography>


        </Typography>
    )
}

export default RequestDetails
