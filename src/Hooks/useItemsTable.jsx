
import { Avatar } from "@mui/material";

function useItemsTable() {
    const IMG = "https://i2-prod.walesonline.co.uk/news/uk-news/article25483139.ece/ALTERNATES/s615/0_cat-1285634_1920.png"


    function createData(ID, Image, Item, Type, Inventory, Price) {
        return { ID, Image, Item, Type, Inventory, Price };
    }


    const rows = [
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        createData(
            <div className="textColor " style={{fontSize: "16px"}}>#11231</div>,
            <Avatar src={IMG} />
            ,
            <div className="textColor " style={{fontSize: "16px"}}>Cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>White cement</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>25</div>
            ,
            <div className="textColor " style={{fontSize: "16px"}}>$9.00</div>
        ),
        
    ];

    const columns = [
        { id: 'ID', label: 'ID' },
        { id: 'Image', label: 'Image' },
        {
            id: 'Item',
            label: 'Item',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Type',
            label: 'Type',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Inventory',
            label: 'Inventory',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Price',
            label: 'Price',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];

    return { rows, columns }

}

export default useItemsTable
