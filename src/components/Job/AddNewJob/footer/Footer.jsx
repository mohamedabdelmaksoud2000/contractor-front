import { Grid, Typography } from '@mui/material'
import React from 'react'
import FooterBtns from './FooterBtns'
import Salender from './Salender'
import TeamComponent from '../../../Projects/AddNewProjectComponents/Footer/team/TeamComponent'
import Schedule from './Schedule'
import Invoice from './Invoice'

function Footer() {
  return (
    <Typography variant='div' component="div" sx={{ marginTop: "25px" }}>
            <Grid container spacing={{ md: 4 }}>
                <Grid item md={5} xs={12}>
                    <Schedule title={'Schedule:'} inputText={true} active={"Schedule later"} />
                    <Invoice />
                    <TeamComponent />
                </Grid>
                <Grid item md={7} xs={12}>
                    <Salender />
                </Grid>
            </Grid>

            <FooterBtns />

        </Typography>
  )
}

export default Footer
