import { Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from './Footer/Footer'
import LeftComponent from './LeftComponent'

function ContentExpense() {
    return (
        <Typography className='invoice' variant='div' component="div" sx={{
            width: "100%",
            background: "#012939",
            marginTop: "25px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "30px 20px",
            color: "white"
        }}>


            <Grid container spacing={{ md: 3 }}>

                <Grid item xs={12} md={6} sx={{ borderRight: { md: "0.5px solid #FFFFFF" }, borderBottom: { xs: "0.5px solid #FFFFFF", md: "none" } }}>
                    <Typography variant='div' component="div" sx={{
                        height: "100%",
                        paddingRight: "20px"
                    }}>

                        <LeftComponent />


                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: "25px" }} variant='h4' className='textColor mt-3 mt-lg-0'>
                        Description
                    </Typography>

                    <Typography variant='div' component="div" sx={{ marginTop: "26px" }}>
                        <textarea
                            className='textColor'
                            style={{
                                width: "100%",
                                minHeight: "240px",
                                maxHeight: "240px",
                                background: "transparent",
                                borderRadius: "8px",
                                border: "1px solid #ffffff4a",
                                padding: "10px"

                            }}></textarea>

                        <Typography sx={{ color: "#ffffffb0" }}>
                            Do not exceed 100 characters when entering the item name
                        </Typography>

                    </Typography>

                </Grid>
            </Grid>

            <Footer />


        </Typography>
    )
}

export default ContentExpense
