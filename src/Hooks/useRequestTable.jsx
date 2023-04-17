import React from 'react'

function useRequestTable() {
    function createData(CLIENT, PROPERTY, CONTACT, REQUESTED) {

        return { CLIENT, PROPERTY, CONTACT, REQUESTED };
    }

    const rows = [
        createData(
            <span style={{fontSize: "20px" }}>Gaber Omar</span>,
            <span style={{fontSize: "20px" }}>Job Management</span>,
            <span style={{fontSize: "20px" }}>GaberOmar@yahoo.com</span>,
            <span style={{ color: "#8ADF16"  , fontSize: "25px"}}>Apr 09,2023</span>

        ),
        createData(
            <span style={{fontSize: "20px" }}>Khalid Ali'</span>,
            <span style={{fontSize: "20px" }}>time tracking</span>,
            <span style={{fontSize: "20px" }}>Khalid.Ali@yahoo.com</span>,
            <span style={{ color: "#8ADF16" , fontSize: "25px" }}>May 15,2023</span>

        ),
    ];

    const columns = [
        { id: 'CLIENT', label: 'CLIENT' },
        { id: 'PROPERTY', label: 'TITLE / PROPERTY' },
        {
            id: 'CONTACT',
            label: 'CONTACT',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'REQUESTED',
            label: 'REQUESTED',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        
    ];

    return { rows, columns }
}

export default useRequestTable
