import React, { useEffect, useState } from 'react'
import Login from "./Login/Login"
import StorageIcon from '@mui/icons-material/Storage';

import { Route, Routes } from 'react-router-dom'
import Newtask from './Nwetask/Newtask'
import TaskName from './TaskName/TaskName';
import Projects from './Projects/MainProject/Projects';
import Tasks from './Tasks/Tasks';
import { Typography } from '@mui/material';
import Request from './Request/Request';
import Clients from './Clients/Clients';


function MainComponent() {

    useEffect(() => {

        document.querySelector("body").setAttribute("state", true)

    }, [])

    const [state, setState] = useState(false)

    const handleSideBar = () => {

        setState(!state)

        if (state) {
            document.querySelector("body").setAttribute("state", true)
        } else {
            document.querySelector("body").setAttribute("state", false)
        }

    }

    return (
        <>
            <Typography variant='div' component="div" onClick={handleSideBar} className='bar' sx={{ position: "absolute", top: "27px", right: "10px", background: "white", borderRadius: "5px", padding: "5px", cursor: "pointer", display: "none", justifyContent: "center", alignItems: "center" }}>
                <StorageIcon />
            </Typography>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/task' element={<Tasks />} />
                <Route path='/newtask' element={<Newtask />} />
                <Route path='/taskName' element={<TaskName />} />
                <Route path='/project' element={<Projects />} />
                <Route path='/request' element={<Request />} />

                <Route path='/clients' element={<Clients />} />

            </Routes>
        </>
    )
}

export default MainComponent
