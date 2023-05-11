import { Typography } from '@mui/material'
import React from 'react'

function Top() {
  return (
    <Typography variant='div' component="div" >
            <Typography className='Text' sx={{ fontSize: "28px", fontWeight: "500" }}>
                Job details:
            </Typography>
            <Typography variant='div' component="div" sx={{ margin: "15px 0" }}>
                <input className='inp' placeholder='Title' type="text" style={{
                    background: "transparent",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "7px",
                    border: "1px solid rgb(255 255 255 / 67%)",
                    fontSize: "17px",
                    outline: "none !important"
                }} />
            </Typography>
            <Typography variant='div' component="div" sx={{ margin: "23px 0" }}>
                <input className='inp' placeholder='Total budget' type="number" style={{
                    background: "transparent",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "7px",
                    border: "1px solid rgb(255 255 255 / 67%)",
                    fontSize: "17px",
                    outline: "none !important"
                }} />
            </Typography>
        </Typography>
  )
}

export default Top
