import { Grid, Typography } from '@mui/material'
import { Container, Stack, textAlign } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import mail from '../../assets/mail.svg'
import telephone from '../../assets/telephon.svg';
const LinkFindContact = () => {

    return (
        <>
            <Container>

                <Grid container sx={{
                    my: 10,
                }}>
                    <Grid item md={4}>
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '32px',
                            textAlign: 'justified'
                        }}>
                            Links
                        </Typography>
                        <Stack direction='row' >
                            <Typography mr={3} mt={4} sx={{
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '32px',
                                textAlign: 'justified',
                                textDecoration: 'underline',
                            }}>

                                Menu
                            </Typography>

                            <Typography mr={3} mt={4} sx={{
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '32px',
                                textAlign: 'justified',
                                textDecoration: 'underline',
                            }}>Blog</Typography>
                        </Stack>
                        <Stack direction='row' >
                            <Typography mr={3} my={4} sx={{
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '32px',
                                textAlign: 'justified',
                                textDecoration: 'underline',
                            }}> Order</Typography>
                            <Typography my={4} sx={{
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '32px',
                                textAlign: 'justified',
                                textDecoration: 'underline',
                            }}>About</Typography>
                        </Stack>

                    </Grid>
                    <Grid item md={5} >
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '32px',
                            textAlign: 'justified'
                        }}>
                            Find us
                        </Typography>

                        <Typography mt={4} sx={{
                            fontWeight: '500',
                            fontSize: '20px',
                            lineHeight: '32px',
                            textAlign: 'justified'
                        }}> 16/2, North Goran, Khilgaon, Dhaka-1219 </Typography>
                        <Typography mt={4} sx={{
                            fontWeight: '500',
                            fontSize: '20px',
                            lineHeight: '32px',
                            textAlign: 'justified',
                            textDecoration: 'underline',
                        }}>GET DIRECTION</Typography>
                    </Grid>
                    <Grid item md={3} >
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '32px',
                            textAlign: 'justified'
                        }}>
                            Contact us
                        </Typography>
                        <Stack direction='row' mt={4}>
                            <img src={mail} alt="mailIcon" style={{ paddingRight: '15px' }} />
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '32px',
                                textAlign: 'justified'
                            }}>
                                platedrop@gmail.com
                            </Typography>

                        </Stack>


                        <Stack direction='row' mt={4}>
                            <img src={telephone} style={{ paddingRight: '15px' }} alt="" />
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '32px',
                                textAlign: 'justified'
                            }}> +44 03456 0789</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}


export default LinkFindContact





