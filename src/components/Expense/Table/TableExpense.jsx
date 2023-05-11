import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import useExpenseTable from '../../../Hooks/useExpenseTable';

function TableExpense() {

    const { columns, rows } = useExpenseTable()

    return (
        <TableContainer component={Paper} sx={{ marginTop: "10px", width: "100%", overflow: "auto", position: "relative", height: "88.5vh" }}>
            <Table sx={{ width: "100%", position: "absolute" }} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                sx={

                                        {
                                            background: 'linear-gradient(180deg, #7DB00E 0%, #377114 100%)',
                                            padding: '10px !important',
                                            color: "white",
                                            fontWeight: "bold",
                                            fontSize: "17px",
                                            paddingLeft: "15px !important",
                                            borderRight: 0,
                                            borderLeft: 0
                                        }
                                }
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
                                            <TableCell key={column.id} align={column.align} sx={column.id === "Img" ? { display: "flex", justifyContent: "center !important" , border: 0 } : { border: 0}}>
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
    )
}

export default TableExpense



