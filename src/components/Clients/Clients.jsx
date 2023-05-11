import React, { useEffect } from 'react'
import CenterClients from './MainClient/CenterClients'
import TableClient from './MainClient/TableClient'
import AddNewClient from './AddNewClient/AddNewClient'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp'

function Clients() {

    const {checked, setChecked} = useApp();

    useEffect(() => {
        if (checked) {
            document.querySelector(".BigMain").setAttribute("dark", 'true')
        } else {
            document.querySelector(".BigMain").setAttribute("dark", 'false')
        }
    }, [checked])

    return (
        <>
            <HeaderComp setChecked={setChecked} checked={checked}/>
            <CenterClients />
            <TableClient />
            <AddNewClient />
        </>
    )
}

export default Clients
