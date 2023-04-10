import { Container, Grid, IconButton, Typography } from '@mui/material'
import brand_img from './../../assets/brand.svg'
import facebookIcon from '../../assets/facebookIcon.svg'
import instaIcon from '../../assets/instaIcon.svg'
import twitIcon from '../../assets/twitIcon.svg'
import React from 'react'
import { Stack } from '@mui/system'


const Footer = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item md={2}>
                        <IconButton sx={{
                            py: 5,
                            px: 16,

                        }} disableRipple>
                            <img src={brand_img} alt="" />
                        </IconButton>
                    </Grid>
                    <Grid item md={7}>

                    </Grid>
                    <Grid item md={3} >
                        <Stack direction='row' sx={{
                            py: 5,

                        }}>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: '32px',
                                pt: '10px',
                                pr: '20px',
                                textDecoration: 'underline'
                            }}>
                                Privacy Policy
                            </Typography>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: '32px',
                                pt: '10px',
                                pr: '20px',
                                textDecoration: 'underline'
                            }}>
                                Terms & Conditions
                            </Typography>
                        </Stack>

                    </Grid>
                </Grid>
                {/* Copyright-section start */}
                <Grid  spacing={2} container sx={{
                      py: 5,
                      px: 16,
                }}>
                    <Grid item md={2}>
                        <Typography sx={{
                          fontSize:'16px',
                          lineHeight:'32px',
                          fontWeight:'500'
                        

                        }}>
                         &copy;   2023 Copyright
                        </Typography>
                    </Grid>
                    <Grid item md={9}>

                    </Grid>
                    <Grid item md={1} >
                        <Stack direction='row' sx={{
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
            </Container>
        </>
    )
}

export default Footer