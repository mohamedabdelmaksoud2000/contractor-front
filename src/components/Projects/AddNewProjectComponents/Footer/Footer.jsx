import { Grid, Typography } from '@mui/material'
import React from 'react'
import Secgedule from './Secgedule'
import Selender from './calendar/calendar'
import TeamComponent from './team/TeamComponent'
import FooterBtns from './FooterBtns'

function Footer() {


    return (
        <Typography variant='div' component="div" sx={{ marginTop: "25px" }}>
            <Grid container spacing={{ md: 4 }}>
                <Grid item md={5} xs={12}>
                    <Secgedule title={'Schedule:'} inputText={true} active={"Schedule later"} />
                    <Secgedule title={"Supervisor:"} select={"Choose supervisor"} active={"Email supervisor about assignment"} />
                    <TeamComponent />
                    <Secgedule title={"Task:"} select={"Choose task"} />
                </Grid>
                <Grid item md={7} xs={12}>
                    <Selender />
                </Grid>
            </Grid>

            <FooterBtns />

        </Typography>
    )
}

export default Footer
