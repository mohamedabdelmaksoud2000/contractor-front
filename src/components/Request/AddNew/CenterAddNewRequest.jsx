import { Typography } from '@mui/material'
import React from 'react'
import RequestDetails from './CenterComponents/RequestDetails'
import ServiceDetails from './CenterComponents/ServiceDetails'

function CenterAddNewRequest() {
    return (
        <Typography variant='div' component="div">
            <RequestDetails />
            <ServiceDetails />

        </Typography>
    )
}

export default CenterAddNewRequest
