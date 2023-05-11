import { Avatar } from '@mui/material';
import React from 'react'

function useExpenseTable() {
    const IMG = "https://i2-prod.walesonline.co.uk/news/uk-news/article25483139.ece/ALTERNATES/s615/0_cat-1285634_1920.png"


    function createData(ID, Title, Time, Date, Total, Reimburse, Accouning, Img) {
        return { ID, Title, Time, Date, Total, Reimburse, Accouning, Img };
    }


    const rows = [
        
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>3:00 pm</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/29/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <Avatar src={IMG} />

        ),

    ];

    const columns = [
        {
            id: 'ID',
            label: 'ID',
        },
        { id: 'Title', label: 'Title' },
        {
            id: 'Time',
            label: 'Time',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Date',
            label: 'Date',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Total',
            label: 'Total',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Reimburse',
            label: 'Reimburse to',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Accouning',
            label: 'Accouning code',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Img',
            label: 'image',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
    ];

    return { rows, columns }
}

export default useExpenseTable
