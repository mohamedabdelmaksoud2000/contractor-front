/* eslint-disable jsx-a11y/alt-text */
import { Typography } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Interrogative from "../../../Icons/interrogative.png"
import React from 'react'

function HeaderRequset() {


  

    return (
        <Typography variant='div' component="div" sx={
            {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }
        }>
            <Typography variant='div' component="div" sx={{
                color: "rgba(243, 243, 243, 0.7)",
                fontSize: "24px",
                fontFamily: ""

            }}>
                Company Name
            </Typography>

            <Typography className='me-5 me-md-0 me-xl-2 HeaderRight' variant='div' component="div" sx={{ display: "flex", alignItems: "center" }}>

                <Typography variant='div' component="div" sx={{ color: "white", fontWeight: "bold", marginLeft: "20px", cursor: "pointer" }}>
                    <NotificationsNoneIcon sx={{ fontSize: "30px" }} />
                </Typography>

                <Typography variant='div' component="div" sx={{ color: "white", fontWeight: "bold", marginLeft: "10px", cursor: "pointer" }}>
                    <img src={Interrogative} />
                </Typography>
            </Typography>

        </Typography>
    )
}

export default HeaderRequset
