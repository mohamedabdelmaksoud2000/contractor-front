import { Typography } from '@mui/material'
import React from 'react'
import HeaderRequset from './componentsRequests/HeaderRequset'
import CenterRequset from './componentsRequests/CenterRequset'
import AddNewRequest from './AddNew/AddNewRequest'
import { Route, Routes } from 'react-router-dom'
import FooterRequset from './componentsRequests/FooterRequset'
import AddRequest from './componentsRequests/AddRequest'

function Request() {
    return (
        <Typography variant='div' component="div">
            <HeaderRequset />
            <CenterRequset />

            <Routes>
                {/* <Route path='/' element={<FooterRequset />} /> */}
                <Route path='/' element={<AddRequest />} />
            </Routes>

            <AddNewRequest />





        </Typography>
    )
}

export default Request
