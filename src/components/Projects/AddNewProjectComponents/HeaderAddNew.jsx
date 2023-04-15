import { Typography } from '@mui/material'
import React from 'react'

import backIcon from "../../../Icons/BackToProjectIcon.png"

import useProjectCenter from "../../../Hooks/useProjectCenter"

function HeaderAddNew() {

    const {HandleAddProject} = useProjectCenter()

    return (
        <Typography variant='div' component="div" >
            <Typography onClick={HandleAddProject} sx={{ cursor: "pointer" }} variant='div' component="div">
                <img src={backIcon} alt="" />
            </Typography>

            <Typography variant='h4' component="div" sx={{marginTop: "30px" , color: "white"}}>
                New Project
            </Typography>

        </Typography>
    )
}

export default HeaderAddNew
