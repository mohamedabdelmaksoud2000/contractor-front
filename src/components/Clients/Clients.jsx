import React from 'react'
import HeaderClients from './MainClient/HeaderClients'
import CenterClients from './MainClient/CenterClients'
import TableClient from './MainClient/TableClient'
import AddNewClient from './AddNewClient/AddNewClient'

function Clients() {
    return (
        <>
            <HeaderClients />
            <CenterClients />
            <TableClient />
            <AddNewClient />

        </>
    )
}

export default Clients
