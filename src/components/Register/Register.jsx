import { Typography } from '@mui/material'
import React from 'react'
import Logo from "../../Icons/Logo.png"
import { Link } from 'react-router-dom'

import "./Register.css";

function Register() {
    return (
        <Typography variant='div' component="div" className='d-flex flex-column justify-content-between p-4 text-white ' sx={{ height: "100vh" }}>
            <Typography variant='div' component="div" className='d-flex justify-content-between flex-wrap'>
                <Typography variant='div' component="div">
                    <img src={Logo} alt="" />

                </Typography>
                <Typography className='fw-bold mt-1' variant='div' component="div" style={{ fontSize: "23px" }}>
                    1-555-777-888-21
                </Typography>
                <Typography variant='div' component="div">
                    <Link to="/login" className='text-white fw-bold' style={{ fontSize: "25px" }}>
                        Log In
                    </Link>
                </Typography>

            </Typography>

            <Typography variant='div' component="div" className='d-flex flex-column justify-content-center align-items-center h-100' >
                <Typography variant='div' component="div" className='d-flex flex-wrap' sx={{ fontSize: { sm: "2rem", md: "4rem", xs: "23px" }, fontWeight: "600" }}>
                    START YOUR
                    <Typography variant='span' component="span" className='ms-1 ms-md-2' sx={{
                        position: "relative",
                        "&:after": {
                            content: "''",
                            position: "absolute",
                            backgroundColor: "#7DB00E",
                            left: "0",
                            width: "100%",
                            height: "50%",
                            zIndex: "-1",
                            bottom: "0",
                        }
                    }}>
                        FREE TRIAL

                    </Typography>

                </Typography>
                <Typography className='normalText'  variant='div' component="div" sx={{ fontSize: "1.5rem", fontWeight: "700", margin: "10px 0" }}>
                    Get all the features and support. No contract required.

                </Typography>

                <Typography variant='div' component="div" className='inputsRegister  d-flex flex-column align-items-center mt-4'>
                    <input type="email" placeholder='Email Company' />
                    <input type="password" placeholder='Add A Password' />
                    <input type="submit" className='mt-2 p-2' value="START FREE TRIAL" style={{ backgroundColor: "#7DB00E" }} />
                </Typography>
            </Typography>


            <Typography variant='div' component="div" className='d-flex flex-column align-items-center  justify-content-end' >

                <Typography className='normalText' variant='div' component="div" sx={{ fontSize: "27px", textAlign: "center", fontWeight: "600" }}>
                    By clicking "Start Free Trial" you agree to receive information from Contractor Solution about our services, plus news and offers. You can unsubscribe at any time. You also agree to our <Link style={{ color: "#7DB00E" }}>Terms of Service</Link> and <Link style={{ color: "#7DB00E" }}>Privacy Policy.</Link>

                </Typography>
            </Typography>
        </Typography>
    )
}

export default Register
