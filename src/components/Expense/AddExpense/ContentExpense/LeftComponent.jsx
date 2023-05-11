import { FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

import expenseIcon from "../../../../Icons/expense.png"
import useExpense from "../../../../Hooks/useExpense"
import AddImgComponent from './AddImg/AddImgComponent'

function LeftComponent() {

    const { age1, handleChange } = useExpense()



    return (
        <>
            <Typography variant='div' component="div" display="flex" alignItems="center">
                <Typography className='me-2' variant='div' component="div">
                    <img src={expenseIcon} alt="" />
                </Typography>
                <Typography variant='div' component="div" sx={{ fontSize: "25px", fontWeight: "bold" }}>
                    Title:
                </Typography>
            </Typography>

            <Typography className='my-3' variant='div' component="div">
                <TextField fullWidth placeholder='Title Expense' id="fullWidth" />
                <Typography sx={{ color: "#ffffff87" }} variant='div' component="div">
                    Do not exceed 20 characters when entering the title expense

                </Typography>
            </Typography>

            <Typography variant='div' component="div" sx={{ width: { md: "85%", xs: "100%" } }}>
                <Typography display="flex" className='justify-content-md-between flex-md-row flex-column align-items-center' variant='div' component="div">

                    <Typography sx={{ width: { xs: "100%", md: "45%" } }} variant='div' component="div">
                        <Typography variant='div' component="div">Date</Typography>

                        <FormControl variant="filled" sx={{ width: "100%" }}>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age1}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </Typography>

                    <Typography sx={{ width: { xs: "100%", md: "45%" }, margin: "0 !important" }} variant='div' component="div">
                        <Typography variant='div' component="div">Total</Typography>
                        <TextField type='number' fullWidth id="fullWidth" sx={{ margin: "0 !important" }} />
                    </Typography>

                </Typography>




                <Typography display="flex" className='justify-content-md-between flex-md-row flex-column align-items-center mt-3' variant='div' component="div">

                    <Typography sx={{ width: { xs: "100%", md: "45%" } }} variant='div' component="div">
                        <Typography variant='div' component="div">Reimbuse to</Typography>

                        <FormControl variant="filled" sx={{ width: "100%" }}>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age1}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </Typography>

                    <Typography sx={{ width: { xs: "100%", md: "45%" } }} variant='div' component="div">
                        <Typography variant='div' component="div">Accounting code</Typography>

                        <FormControl variant="filled" sx={{ width: "100%" }}>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age1}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </Typography>

                </Typography>
            </Typography>

            <Typography variant='div' component="div" className='my-4'>
                <Typography variant='div' component="div">
                    Item Image:
                </Typography>


                <Typography variant='div' component="div">
                    <AddImgComponent/>

                </Typography>

            </Typography>

        </>
    )
}

export default LeftComponent
