import { Grid } from '@mui/material'
import React from 'react'
import Schedule from './Schedule'
import Notes from './Notes'

function End() {
    return (
        <Grid container spacing={5}>
            <Schedule />
            <Notes />

        </Grid>
    )
}

export default End
