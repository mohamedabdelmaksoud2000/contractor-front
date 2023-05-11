import React from 'react'

function useTableJob() {
    function createData(CLIENT, PROPERTY, NextVisit, INVIOCING, TOTAL) {

        return { CLIENT, PROPERTY, NextVisit, INVIOCING, TOTAL };
    }

    const rows = [
        createData(
            <span style={{ fontSize: "20px" }}>ِAhmed Hamed</span>,
            <span style={{ fontSize: "20px" }}>Bricks</span>,
            <span style={{ fontSize: "20px", color: "#8ADF16" }}>Apr 09,2023 <div className='textColor'>Monthly</div></span>,
            <span style={{ fontSize: "20px" }}>Upon Job Completion</span>,
            <span style={{ fontSize: "20px" }}>$100</span>,
        ),

        createData(
            <span style={{ fontSize: "20px" }}>ِAhmed Hamed</span>,
            <span style={{ fontSize: "20px" }}>Bricks</span>,
            <span style={{ fontSize: "20px", color: "#8ADF16" }}>Apr 09,2023<div className='textColor'>Monthly</div></span>,
            <span style={{ fontSize: "20px" }}>Upon Job Completion</span>,
            <span style={{ fontSize: "20px" }}>$100</span>,
        ),


    ];

    const columns = [
        { id: 'CLIENT', label: 'CLIENT' },
        { id: 'PROPERTY', label: 'TITLE / PROPERTY' },
        {
            id: 'NextVisit',
            label: 'NextVisit / SCHEDULE',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'INVIOCING',
            label: 'INVIOCING',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'TOTAL',
            label: 'TOTAL',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },

    ];

    const rows2 = [
        createData(
            <span style={{ fontSize: "20px" }}>ِSara Yassin</span>,
            <span style={{ fontSize: "20px" }}>Stairs</span>,
            <span style={{ fontSize: "20px", color: "#8ADF16" }}>Apr 09,2023 <div className='textColor'>Weekly</div></span>,
            <span style={{ fontSize: "20px" }}>Upon Job Completion</span>,
            <span style={{ fontSize: "20px" }}>$50</span>,
        ),

    ];

    const columns2 = [
        { id: 'CLIENT', label: 'CLIENT' },
        { id: 'PROPERTY', label: 'TITLE / PROPERTY' },
        {
            id: 'NextVisit',
            label: 'NextVisit / SCHEDULE',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'INVIOCING',
            label: 'INVIOCING',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'TOTAL',
            label: 'TOTAL',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },

    ];

    return { rows, columns, rows2, columns2 }
}

export default useTableJob
