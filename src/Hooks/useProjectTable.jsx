/* eslint-disable jsx-a11y/alt-text */
import LogoAdobe from "../Icons/IconTable.png";
import LogoSpoti from "../Icons/spotiIcon.png";
import LogoFix from "../Icons/FixIcon.png";
import Cancell from "../Icons/Cancell.png";
import working from "../Icons/Working.png";
import Done from "../Icons/Done.png";
function useProjectTable() {
    function createData(ID, Company, Budget, Status, Compeletion) {

        return { ID, Company, Budget, Status, Compeletion };
    }

    const rows = [
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoAdobe} /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Chakra Soft UI Version</span></div>, "$14,000", <div> <img src={Cancell} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "20%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>20%</span>
            </div>
        ),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoSpoti} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Launch our Mobile App</span></div>, "$5000", <div> <img src={working} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "60%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>60%</span>
            </div>
        ),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoFix} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Fix Platform Errors</span></div>, "$3500", <div> <img src={Done} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "70%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>70%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoSpoti} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Launch our Mobile App</span></div>, "$6000", <div> <img src={Cancell} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "50%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>50%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoAdobe} /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Chakra Soft UI Version</span></div>, "$400", <div> <img src={Done} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "33%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>33%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoSpoti} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Launch our Mobile App</span></div>, "$960", <div> <img src={working} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "47%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>47%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoAdobe} /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Chakra Soft UI Version</span></div>, "$5300", <div> <img src={Cancell} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "91%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>91%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoSpoti} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Launch our Mobile App</span></div>, "$10.000", <div> <img src={working} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "43%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>43%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoSpoti} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Launch our Mobile App</span></div>, "$200", <div> <img src={Done} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "67%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>67%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoFix} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Fix Platform Errors</span></div>, "$3000", <div> <img src={Cancell} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "73%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>73%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoFix} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Fix Platform Errors</span></div>, "$1500", <div> <img src={Done} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "20%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>20%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoAdobe} /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Chakra Soft UI Version</span></div>, "$6000", <div> <img src={working} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "30%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>30%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoSpoti} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Launch our Mobile App</span></div>, "$5300", <div> <img src={Done} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "10%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>10%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoAdobe} /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Chakra Soft UI Version</span></div>, "$5000", <div> <img src={working} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "15%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>15%</span>
            </div>),
        createData('#11231', <div className='d-flex justify-content-md-start justify-content-center'><img src={LogoFix} alt="" /><span className='d-none d-md-inline' style={{ marginLeft: "5px" }}>Fix Platform Errors</span></div>, "$960", <div> <img src={Cancell} alt="" /></div>,
            <div className='d-flex , justify-content-start , align-items-center' >
                <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "5%", background: "#6CB8E7" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ marginLeft: "7px" }}>5%</span>
            </div>),
    ];

    const columns = [
        { id: 'ID', label: 'ID' },
        { id: 'Company', label: 'Name project' },
        {
            id: 'Budget',
            label: 'Budget',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Status',
            label: 'Status',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Compeletion',
            label: 'Compeletion',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];

    return { rows , columns }

}

export default useProjectTable
