import { Box, Container, IconButton, Typography } from '@mui/material'
import React from 'react'
import Quotation from '../../assets/Quotation.svg'
import User from '../../assets/User.svg'
const Testimonial = () => {
    return (
        <>
            <Container sx={{
                mt: 16
            }} maxWidth="xl">


                <Typography sx={{
                    py: 5,
                    px: 16,
                    mb: 8,
                    fontSize: '40px',
                    fontWeight: 700,
                    color: '#1E1E1E',
                    lineHeight: '49px',
                    textAlign: 'center'
                }}>
                    See Why Customers Love PlateDrop
                </Typography>
                <Box sx={{
                    px: 16,
                }}>
                    <IconButton sx={{
                        position: 'absolute',
                        //    float:'right',
                        left: '130px',
                        marginTop: '-100px',
                        zIndex: -1



                    }} >
                        <img src={Quotation} alt="quotationIcon" />
                    </IconButton>
                    <Typography sx={{
                        fontSize: '40px',
                        fontWeight: 400,
                        lineHeight: '49px',
                        textAlign: 'justify'
                    }}>
                        I'm a picky eater, but PlateDrop has something for everyone. The variety of cuisines and dietary options is impressive, and the meals always taste great. I've been a customer for months now and I plan on sticking with PlateDrop for a long time.
                    </Typography>
                    <Box width='1172px' sx={
                        {
                            my: '100px'
                        }
                    }>

                        <img src={User} alt="" />
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Testimonial



