import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './StayUpToDate.css'
import { ACCENT_SECONDARY_LIGHT_COLOR, TERTIARY_COLOR } from '../../colors';
import check from '../../assets/check.svg'


const StayUpToDate = () => {
    return (
        <Box sx={{
            backgroundColor: ACCENT_SECONDARY_LIGHT_COLOR,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 7,
            pb: 4,
        }}>

            <Container>
                <Grid container spacing={10} sx={{
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
                            fontWeight: 500,
                            lineHeight: '32px',
                            textAlign: 'justify',
                            letterSpacing: '-0.4px',
                        }}>
                            Stay in the know with PlateDrop - subscribe to our monthly newsletter for healthy meal delivery updates, discounts, and wellness tips.
                        </Box>
                    </Grid>

                    <Grid item sm={12} md={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>

                        <input className='inputField' placeholder='Enter your email' />

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            mt: 2
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}>
                                <img src={check} alt="" className='circleInput'
                                />
                                <span style={{
                                    marginLeft: '12px',
                                    fontSize: '12px',
                                    fontWeight: '500',
                                    textAlign: 'justify',
                                }}>
                                    I agree with <label style={{ color: TERTIARY_COLOR }}> Privacy Policy</label> and <br />
                                    <label style={{ color: TERTIARY_COLOR }}> Terms of Conditions</label>
                                </span>
                            </Box>
                            <Button
                                sx={{
                                    background: TERTIARY_COLOR,
                                    color: 'white',
                                    width: '105px',
                                    height: '40px',
                                    '&:hover': {
                                        background: TERTIARY_COLOR,
                                        color: '#ffffff'
                                    },
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    lineHeight: '19px',
                                    textAlign: 'justify',
                                    textTransform: 'capitalize',
                                    borderRadius: '8px'
                                }}
                                variant='contained'
                                disableElevation
                            >
                                Submit
                            </Button>
                        </Box>


                    </Grid>

                </Grid></Container>
        </Box >
    )
}

export default StayUpToDate






