import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box, Container, fontWeight } from '@mui/system'
import React from 'react'
import './StayUpToDate.css'
import { ACCENT_SECONDARY_LIGHT_COLOR, TERTIARY_COLOR } from '../../colors';
import check from '../../assets/check.svg'


const StayUpToDate = () => {
    return (
        <Box sx={{
            backgroundColor: ACCENT_SECONDARY_LIGHT_COLOR,
        }}>
            <Grid container spacing={7} sx={{
                px: 5,
                my: 10,
            }}>
                <Grid item sm={12} md={6} >
                    <Typography my={3} sx={{
                        fontWeight: '700',
                        fontSize: '48px',
                        lineHeight: '49px'

                    }}>
                        Stay up to date
                    </Typography>
                    <Box sx={{
                        fontSize: '16px',
                        fontWeight: 500
                    }}>
                        Stay in the know with PlateDrop - subscribe to our monthly newsletter for healthy meal delivery updates, discounts, and wellness tips.
                    </Box>
                </Grid>

                <Grid item sm={12} md={6} my={3}>
                    <input className='inputField' placeholder='Enter your email *' />
                    <Grid container>
                        <Grid item md={9}>
                            <img src={check} alt="" className='circleInput'
                            />
                            <span style={{ fontSize: '12px' }}>
                                I agree with <label style={{ color: TERTIARY_COLOR }}> Privacy Policy</label> and
                                <label style={{ color: TERTIARY_COLOR }}> Terms of Conditions</label>
                            </span>
                        </Grid>
                        <Grid item md={3}>
                            <Button
                                sx={{
                                    my: 2,
                                    mx: 3,
                                    color: '#fff',
                                    background: TERTIARY_COLOR
                                }}
                                variant="">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Box>
    )
}

export default StayUpToDate
