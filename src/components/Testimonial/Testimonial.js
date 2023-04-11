import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import Quotation from '../../assets/Quotation.svg'
import './Testimonial.css'
import user_one from '../../assets/user_one.svg'
import user_two from '../../assets/user_two.svg'
import user_three from '../../assets/user_three.svg'
import user_four from '../../assets/user_four.svg'
import { TERTIARY_COLOR } from './../../colors';



const Testimonial = () => {
    return (
        <>
            <Container sx={{
                mt: 16
            }}>
                <Typography sx={{
                    py: 5,
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
                    <Box sx={{
                        flexGrow: 1,
                        mt: 16
                    }}>
                        <Grid container spacing={8}>
                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} item xs={12} sm={6} md={6} lg={3}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img src={user_one} alt="" />
                                    <Box sx={{
                                        ml: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography>
                                            Hanif Sarkar
                                        </Typography>
                                        <Typography>
                                            Software Engineer
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    backgroundColor: TERTIARY_COLOR,
                                    width: '222px',
                                    height: '2px',
                                    mt: 1
                                }}></Box>
                            </Grid>

                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} item xs={12} sm={6} md={6} lg={3}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img src={user_two} alt="" />
                                    <Box sx={{
                                        ml: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography>
                                            Abu Malek
                                        </Typography>
                                        <Typography>
                                            Business Owner
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'none',
                                    backgroundColor: TERTIARY_COLOR,
                                    width: '222px',
                                    height: '2px',
                                    mt: 1
                                }}></Box>
                            </Grid>

                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} item xs={12} sm={6} md={6} lg={3}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img src={user_three} alt="" />
                                    <Box sx={{
                                        ml: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography>
                                            Mohiuddin
                                        </Typography>
                                        <Typography>
                                            Student
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'none',
                                    backgroundColor: TERTIARY_COLOR,
                                    width: '222px',
                                    height: '2px',
                                    mt: 1
                                }}></Box>
                            </Grid>

                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} item xs={12} sm={6} md={6} lg={3}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img src={user_four} alt="" />
                                    <Box sx={{
                                        ml: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography>
                                            Altaf Hossain
                                        </Typography>
                                        <Typography>
                                            Lecturer
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'none',
                                    backgroundColor: TERTIARY_COLOR,
                                    width: '222px',
                                    height: '2px',
                                    mt: 1
                                }}></Box>
                            </Grid>


                        </Grid>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Testimonial





