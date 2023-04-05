import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../../colors'
import './About.css';
import imag1 from '../../assets/Order.svg'
const About = () => {
  return (
    <>
        <Container  maxWidth="xl">
            <Box sx={{
                 py: 5,
                 px: 16,
                 fontSize:'20px',
                 fontWeight:600,
                 color:TERTIARY_COLOR
            }}>
                <div>Who we are?</div>
            </Box>
            <Box sx={{
                fontSize:'40px',
                lineHeight:'49px',
                textAlign: 'justify',
                fontWeight:400,
                color: '#1E1E1E',
                px: 16,
            }}>
               
                    {/* Hightlight class use for hover effect on about.css  */}
                <div className='aboutText'>
                PlateDrop delivers the <span className='highlight'> best</span> food from your favorite local restaurants, with <span className='highlight'> fast and friendly </span>service. Our team is dedicated to ensuring that every order is delivered with <span className='highlight'> care and attention </span>to detail. Thank you for choosing PlateDrop!
                </div>
            </Box>
                {/* Order icon  is here  */}
            <Grid>
            <IconButton sx={{
                                py: 9,
                                px: 16,
                                display: { md: 'flex' },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                }
                            }} disableRipple>
                                <img src={imag1} alt="" />
                            </IconButton>
            </Grid>
        </Container>
    </>
  )
}

export default About