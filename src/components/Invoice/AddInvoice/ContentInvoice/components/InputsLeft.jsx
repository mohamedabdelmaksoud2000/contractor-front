import { FormControl, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

function InputsLeft() {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Typography variant='div' component="div">
                <Typography variant='div' component="div" sx={{ color: "white", margin: "5px 0 10px " }}>
                    Number
                </Typography>
                <Typography variant='div' component="div">
                    <input type="number" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgba(255, 255, 255, 0.67)",
                        fontSize: "17px"
                    }} />
                </Typography>
            </Typography>

            <Typography variant='div' component="div" >
                <Typography variant='div' component="div" sx={{ color: "white", margin: "15px 0 5px " }}>
                    Pay For
                </Typography>
                <Typography variant='div' component="div">

                    <FormControl sx={{ width: "100%" }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                background: "transparent",
                                color: "white",
                                padding: "4px 12px",
                                border: "1px solid rgba(255, 255, 255, 0.67)",
                                fontSize: "17px",
                                width: "100%"
                            }}
                        >
                            <MenuItem value="">
                                <span></span>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                </Typography>
            </Typography>


            <Typography variant='div' component="div">
                <Typography variant='div' component="div" sx={{ color: "white", margin: "5px 0 10px " }}>
                    Discount
                </Typography>
                <Typography variant='div' component="div">
                    <input type="number" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgba(255, 255, 255, 0.67)",
                        fontSize: "17px"
                    }} />
                </Typography>
            </Typography>


            <Typography variant='div' component="div" >
                <Typography variant='div' component="div" sx={{ color: "white", margin: "15px 0 5px " }}>
                    Payment Due
                </Typography>
                <Typography variant='div' component="div">

                    <FormControl sx={{ m: 1, width: "100%" }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                background: "transparent",
                                color: "white",
                                padding: "4px 12px",
                                border: "1px solid rgba(255, 255, 255, 0.67)",
                                fontSize: "17px",
                                width: "100%"
                            }}
                        >
                            <MenuItem value="">
                                <span></span>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                </Typography>
            </Typography>


        </div>
    )
}

export default InputsLeft
