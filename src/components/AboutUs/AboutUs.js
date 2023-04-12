import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { TERTIARY_COLOR } from '../../colors'
import './AboutUs.css';
import Order from '../../assets/Order.svg'
import Delivery from '../../assets/Delivery.svg'
import Enjoyment from '../../assets/Enjoyment.svg'



const About = () => {
    return (
        <>
            <Container sx={{
                mt: 8
            }}>
                <Typography sx={{
                    py: 5,
                    fontSize: '20px',
                    fontWeight: 600,
                    color: TERTIARY_COLOR
                }} >Who we are?</Typography>

                <Typography sx={{
                    fontSize: '40px',
                    lineHeight: '49px',
                    textAlign: 'justify',
                    fontWeight: 400,
                    color: '#1E1E1E'
                }} className='aboutText'>
                    PlateDrop delivers the <span className='highlight'> best</span> food from your favorite local restaurants, with <span className='highlight'> fast and friendly </span>service. Our team is dedicated to ensuring that every order is delivered with <span className='highlight'> care and attention </span>to detail. Thank you for choosing PlateDrop!
                </Typography>


                <Grid container spacing={18}>
                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }} className='grid-item' item xs={12} sm={12} md={6} lg={4}>
                        < Box sx={{
                            mt: 24,
                            filter: 'grayscale(100%)',
                            transition: 'filter 0.2s ease',
                            py: 9,
                            display: { md: 'flex' },
                            '&:hover': {
                                filter: 'none'
                            }
                        }} disableRipple >
                            <img src={Order} alt="" />
                        </Box >
                        <Typography sx={{
                            color: '#BFBFBF',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '32px'
                        }} className='grid-text'>
                            Order
                        </Typography>
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }} className='grid-item' item xs={12} sm={12} md={6} lg={4}>
                        <Box sx={{
                            filter: 'grayscale(100%)',
                            transition: 'filter 0.2s ease',
                            py: 9,
                            display: { md: 'flex' },
                            '&:hover': {
                                filter: 'none'
                            }
                        }} disableRipple >
                            <img src={Delivery} alt="" />
                        </Box >
                        <Typography sx={{
                            color: '#BFBFBF',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '32px'
                        }} className='grid-text'>
                            Delivery
                        </Typography>
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }} className='grid-item' item xs={12} sm={12} md={6} lg={4}>
                        < Box sx={{
                            filter: 'grayscale(100%)',
                            transition: 'filter 0.2s ease',
                            py: 9,
                            display: { md: 'flex' },
                            '&:hover': {
                                filter: 'none'
                            }
                        }} disableRipple >
                            <img src={Enjoyment} alt="" />
                        </Box >
                        <Typography sx={{
                            color: '#BFBFBF',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '32px',
                            mt: 20
                        }} className='grid-text'>
                            Enjoyment
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default About







