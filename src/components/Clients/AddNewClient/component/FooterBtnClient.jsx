import { Button, Typography } from '@mui/material'
import React from 'react'
import useClientStates from '../../../../Hooks/useClientStates'

function FooterBtnClient() {

    const {save , setSave} = useClientStates()

    return (
        <Typography className='WhenSave' variant='div' component="div" sx={{
            display: save ? "none" : "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "30px 20px 0px"
            
        }}>
            <Typography variant='div' component="div">
                <Button sx={{
                    border: "1px solid #FFFFFF",
                    background: "transparent",
                    padding: "7px 22px",
                    borderRadius: "7px",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                        opacity: 0.7
                    }
                }}>
                    Cancel
                </Button>

            </Typography>
            <Typography variant='div' component="div">
                <Button sx={{
                    background: "transparent",
                    padding: "7px 15px",
                    color: '#7DB00E',
                    border: "2px solid #7DB00E",
                    borderRadius: "7px",
                    fontWeight: "bold",
                    marginRight: "30px",
                    "&:hover": {
                        opacity: 0.7
                    }
                }}>
                    Save And Create Another
                </Button>

                <Button onClick={() => setSave(true)}  sx={{
                    background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                    padding: "7px 20px",
                    color: 'white',
                    border: "2px solid white",
                    borderRadius: "7px",
                    fontWeight: "600"
                }}>
                    Save Client
                </Button>

            </Typography>


        </Typography>
    )
}

export default FooterBtnClient
