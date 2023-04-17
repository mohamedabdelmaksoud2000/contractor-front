import { Typography } from '@mui/material'
import React from 'react'

import "./AddNewRequest.css"
import FooterBtnsReq from './FooterBtnsReq'
import HeaderAddNew from './HeaderAddNew'
import CenterAddNewRequest from './CenterAddNewRequest'
import End from './CenterComponents/End/End'

function AddNewRequest() {
    return (
        <Typography variant='div' component="div" className='ADD-Request' sx={{
            width: 0,
            position: "absolute",
            top: 0,
            right: "0",
            bottom: "0",
            background: "#10394A",
            zIndex: 2,
            transition: "800ms",
            overflow: "hidden",
            marginTop: "20px",
            height: "97vh"
        }}>

            <HeaderAddNew />
            <CenterAddNewRequest />
            <End />
            <FooterBtnsReq />

        </Typography>
    )
}

export default AddNewRequest
