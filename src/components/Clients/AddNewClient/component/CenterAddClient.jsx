import { Grid, Typography } from '@mui/material'
import React from 'react'
import FooterBtnClient from './FooterBtnClient'
import ClientDetails from './CenterComponents/ClientDetails'
import PropertyDetails from './CenterComponents/PropertyDetails'

function CenterAddClient() {


    return (
        <Typography variant='div' component="div" sx={{
            background: "#012939",
            border: "1px solid white",
            padding: "0px 10px 30px 0px",
            borderTop: "5px solid #7DB00E",
        }}>
            <Grid container >
                <Grid item xs={12} md={6}>
                    <ClientDetails />

                </Grid>
                <Grid item xs={12} md={6}>
                    <PropertyDetails />
                </Grid>
            </Grid>

            <FooterBtnClient />

        </Typography>
    )
}

export default CenterAddClient
