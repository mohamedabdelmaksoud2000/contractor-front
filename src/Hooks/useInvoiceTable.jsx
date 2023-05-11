import { Avatar } from '@mui/material';
import React from 'react'

function useInvoiceTable() {

    const IMG = "https://i2-prod.walesonline.co.uk/news/uk-news/article25483139.ece/ALTERNATES/s615/0_cat-1285634_1920.png"


    function createData(number, CompanyLogo, PayFor, address, SendingDate, PaymentDue, Elements, AllAmounts, Discount, Tax) {
        return { number, CompanyLogo, PayFor, address, SendingDate, PaymentDue, Elements, AllAmounts, Discount, Tax };
    }

    const rows = [
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Annette</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>9/23/16</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>10%</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>25</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$9.00</div>
            ,
        ),

    ];


    const columns = [
        {
            id: 'number',
            label: 'number'
        },
        {
            id: 'CompanyLogo',
            label: 'Company logo',
            align: 'center',

        },
        {
            id: 'PayFor',
            label: 'Pay for',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'address',
            label: 'address',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'SendingDate',
            label: 'Sending Date',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'PaymentDue',
            label: 'Payment due',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Elements',
            label: 'Elements',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'AllAmounts',
            label: 'All amounts',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Discount',
            label: 'Discount',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Tax',
            label: 'Tax',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];

    return { rows, columns }
}

export default useInvoiceTable
