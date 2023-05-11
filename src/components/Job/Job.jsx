import React from 'react'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';
import JobCenter from './center/JobCenter';
import { Outlet } from 'react-router-dom';
import AddNewJob from './AddNewJob/AddNewJob';

function Job() {
    const { checked, setChecked } = useApp();

    return (
        <>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <JobCenter />
            <Outlet />
            <AddNewJob />


        </>
    )
}

export default Job
