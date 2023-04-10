import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import brand_img from './../../assets/brand.svg'
import facebookIcon from '../../assets/facebookIcon.svg'
import instaIcon from '../../assets/instaIcon.svg'
import twitIcon from '../../assets/twitIcon.svg'
import React from 'react'
import { Stack } from '@mui/system'
import { ACCENT_SECONDARY_LIGHT_COLOR } from './../../colors';


const Footer = () => {
    return (
        <>
            <Container sx={{
                mt: 6,
                mb: 10
            }}>

                <Grid container sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>

                    <Grid item md={2}>
                        <img src={brand_img} alt="" />
                    </Grid>

                    <Grid item md={4} >
                        <Stack spacing={13} direction='row' sx={{
                        }}>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: '32px',
                                pt: '10px',
                                textDecoration: 'underline'
                            }}>
                                Privacy Policy
                            </Typography>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: '32px',
                                pt: '10px',
                                textDecoration: 'underline'
                            }}>
                                Terms & Conditions
                            </Typography>
                        </Stack>

                    </Grid>

                </Grid>

                <Box sx={{
                    mt: 6,
                    mb: 7,
                    backgroundColor: ACCENT_SECONDARY_LIGHT_COLOR,
                    maxWidth: '100%',
                    height: '2px',
                }}>

                </Box>


                <Grid spacing={2} container sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Grid item md={2}>
                        <Typography sx={{
                            fontSize: '16px',
                            lineHeight: '32px',
                            fontWeight: '500'
                        }}>
                            &copy;   2023 Copyright
                        </Typography>
                    </Grid>
                    <Grid item md={2} >
                        <Stack spacing={2} direction='row' sx={{
                        }}>
                            <IconButton disableRipple>
                                <img src={facebookIcon} alt="" />
                            </IconButton>
                            <IconButton disableRipple>
                                <img src={instaIcon} alt="" />
                            </IconButton>
                            <IconButton disableRipple>
                                <img src={twitIcon} alt="" />
                            </IconButton>
                        </Stack>

                    </Grid>
                </Grid>
            </Container >
        </>
    )
}

export default Footer