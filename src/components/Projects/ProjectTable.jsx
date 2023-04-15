/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useProjectTable from '../../Hooks/useProjectTable';




// 


function ProjectTable() {

    const { rows, columns } = useProjectTable()


    return (


        <TableContainer component={Paper} sx={{ marginTop: "10px", width: "100%", overflow: "auto", position: "relative", height: "88.5vh" }}>
            <Table sx={{ width: "100%", position: "absolute" }} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                sx={{
                                    textAlign: "left", background: 'linear-gradient(180deg, #7DB00E 0%, #377114 100%)', padding: '10px !important',
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "17px",
                                    paddingLeft: "15px !important"
                                    , borderRight: 0, borderLeft: 0

                                }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .map((row, index) => {
                            return (
                                <TableRow sx={{
                                    '&:last-child td, &:last-child th': { border: 0 }, "&:hover": {
                                        background: "rgba(60, 162, 224, 0.2) !important"
                                    }
                                }} hover role="checkbox" tabIndex={-1} key={index}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} sx={{ color: "white ", textAlign: "left", borderRight: 0, borderLeft: 0 }}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>


    );
}

export default ProjectTable
