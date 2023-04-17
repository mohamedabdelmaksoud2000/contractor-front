import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, OutlinedInput, Typography } from '@mui/material'
import React from 'react'

import iconCalender from "../../../../../Icons/material-symbols_date-range-outline-rounded.png"

function Schedule() {



    return (
        <Grid item md={6} xs={12}>

            <Typography variant='div' component="div" sx={{
                background: "#012939",
                borderTop: "2px solid #7DB00E",
                color: "white",
                padding: "30px",
                marginBottom: "30px"
            }}>
                <Typography variant='div' component="div"
                    sx={{ fontSize: "30px", fontWeight: "600" }}
                >
                    Schedule:
                </Typography>

                <Typography variant='div' component="div"
                    sx={{
                        fontSize: "18px",
                        fontWeight: "300",
                        margin: "15px 0 10px ",
                        color: "#ffffffe0"
                    }}
                >
                    If available, Which day works best for you?
                </Typography>

                <Typography variant='div' component="div" sx={{ fontSize: "30px" }}>
                    <FormControl sx={{
                        width: '45%',
                        position: "relative",
                        padding: "5px"
                    }}>
                        <Typography variant='div' component="div" sx={{
                            position: "absolute",
                            right: "10px",
                            top: "0px"
                        }}>
                            <img className='w-100 h-100' src={iconCalender} alt="" />

                        </Typography>

                        <OutlinedInput sx={{ border: "1px solid #ffffff8c", height: "45px", borderRadius: "7px !important" }} placeholder="" />
                    </FormControl>
                </Typography>

                <Typography variant='div' component="div">
                    <Typography>
                        Preferred time:
                    </Typography>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} label="Anytime" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} label="Anytime" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} label="Afternoon" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} label="Evening" />
                    </FormGroup>

                </Typography>

            </Typography>

        </Grid>
    )
}

export default Schedule
