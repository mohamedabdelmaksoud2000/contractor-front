import { Typography } from '@mui/material'
import React from 'react'
import "./AddNewJob.css"
import HeaderAddNew from '../../Request/AddNew/HeaderAddNew'
import CenterAddNew from './center/CenterAddNew'
import Footer from './footer/Footer'

function AddNewJob() {
    return (
        <Typography variant='div' component="div" className='ADD-Job' sx={{
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
            <HeaderAddNew name="New Job"/>
            <CenterAddNew />
            <Footer/>


        </Typography>
    )
}

export default AddNewJob
