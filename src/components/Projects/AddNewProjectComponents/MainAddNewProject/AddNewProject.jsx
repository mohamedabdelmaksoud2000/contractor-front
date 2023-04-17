import { Typography } from '@mui/material'
import React from 'react'
import HeaderAddNew from '../ComponentAddNewProject/HeaderAddNew'
import CenterAddNew from '../ComponentAddNewProject/CenterAddNew'
import Footer from '../Footer/Footer'

import "./AddNewProject.css"



function AddNewProject() {


    return (
        <Typography variant='div' component="div" className='ADD-Project' sx={{
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
            height: "100%"
        }}>
            <HeaderAddNew />
            <CenterAddNew />
            <Footer />

        </Typography>
    )
}

export default AddNewProject
