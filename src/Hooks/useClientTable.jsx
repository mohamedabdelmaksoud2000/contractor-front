
function useClientTable() {
    function createData(Client, Property, Contact, LastActive) {

        return { Client, Property, Contact, LastActive };
    }

    const rows = [

        createData(
            <span>
                Courtney Henry
            </span>,
            <span>
                Pakistan
            </span>,
            <span>
                (505) 555-0125
            </span>,
            <span style={{ textAlign: "right " }}>
                5y
            </span>
        ),
        createData(
            <span>
                Kathryn Murphy
            </span>,
            <span>
                Georgia
            </span>,
            <span>
                (270) 555-0117
            </span>,
            <span>
                5s
            </span>
        ),
        createData(
            <span>
                Bessie Cooper
            </span>,
            <span>
                Haiti
            </span>,
            <span>
                (684) 555-0102
            </span>,
            <span>
                12h
            </span>
        ),
        createData(
            <span>
                Ralph Edwards
            </span>,
            <span>
                Guinea
            </span>,
            <span>
                (303) 555-0105
            </span>,
            <span>
                12y
            </span>
        ),
        createData(
            <span>
                Darlene Robertson
            </span>,
            <span>
                Kiribati
            </span>,
            <span>
                (219) 555-0114
            </span>,
            <span>
                1s
            </span>
        ),
        createData(
            <span>
                Ralph Edwards
            </span>,
            <span>
                Guinea
            </span>,
            <span>
                (303) 555-0105
            </span>,
            <span>
                12y
            </span>
        ),
        createData(
            <span>
                Bessie Cooper
            </span>,
            <span>
                Haiti
            </span>,
            <span>
                (684) 555-0102
            </span>,
            <span>
                12h
            </span>
        ),
        createData(
            <span>
                Bessie Cooper
            </span>,
            <span>
                Haiti
            </span>,
            <span>
                (684) 555-0102
            </span>,
            <span>
                12h
            </span>
        ),
        createData(
            <span>
                Ralph Edwards
            </span>,
            <span>
                Guinea
            </span>,
            <span>
                (303) 555-0105
            </span>,
            <span>
                12y
            </span>
        ),
        createData(
            <span>
                Courtney Henry
            </span>,
            <span>
                Pakistan
            </span>,
            <span>
                (505) 555-0125
            </span>,
            <span style={{ textAlign: "right " }}>
                5y
            </span>
        ),
        createData(
            <span>
                Kathryn Murphy
            </span>,
            <span>
                Georgia
            </span>,
            <span>
                (270) 555-0117
            </span>,
            <span>
                5s
            </span>
        ),
        createData(
            <span>
                Bessie Cooper
            </span>,
            <span>
                Haiti
            </span>,
            <span>
                (684) 555-0102
            </span>,
            <span>
                12h
            </span>
        ),
        createData(
            <span>
                Ralph Edwards
            </span>,
            <span>
                Guinea
            </span>,
            <span>
                (303) 555-0105
            </span>,
            <span>
                12y
            </span>
        ),
        createData(
            <span>
                Bessie Cooper
            </span>,
            <span>
                Haiti
            </span>,
            <span>
                (684) 555-0102
            </span>,
            <span>
                12h
            </span>
        ),
        createData(
            <span>
                Kathryn Murphy
            </span>,
            <span>
                Georgia
            </span>,
            <span>
                (270) 555-0117
            </span>,
            <span>
                5s
            </span>
        ),

    ];


    const columns = [
        {
            id: 'Client',
            label: 'Client'
        },
        {
            id: 'Property',
            label: 'Property'
        },
        {
            id: 'Contact',
            label: 'Contact',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'LastActive',
            label: 'Last Active',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },

    ];

    return { rows, columns }
}

export default useClientTable
