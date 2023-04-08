import React from 'react';
import Box from '@mui/material/Box';
import './Banner.css';
import { Button, Grid, Typography } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './../../colors';
import bike from './../../assets/bike.svg'
import banner_arrow from './../../assets/banner_arrow.svg'


const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 15 }}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" spacing={1}>
                <Grid item lg={7}>
                    <img src={bike} alt="" />
                </Grid>
                <Grid item xs={5} alignSelf="flex-start" sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography sx={{
                        fontFamily: 'Montserrat, Arial, sans-serif',
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '32px',
                        textAlign: 'justify',
                        width: '468px'
                    }}>
                        Order from your favorite local restaurants and enjoy hassle-free delivery with PlateDrop. We're dedicated to bringing you fast, friendly service and mouth-watering meals that are sure to satisfy.
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Montserrat, Arial, sans-serif',
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '32px',
                        textAlign: 'justify',
                        mt: 2
                    }}>
                        <span style={{ color: TERTIARY_COLOR }}>150+</span> Cuisine to choose from
                    </Typography>
                    <Box>
                        <Button variant="contained" className='banner_button' sx={{
                            width: '170px',
                            height: '48px',
                            padding: '8px 30px 8px 16px',
                            borderRadius: '8px',
                            backgroundColor: PRIMARY_COLOR,
                            color: '#1E1E1E',
                            '&:hover': {
                                backgroundColor: SECONDARY_COLOR,
                                paddingRight: '-5px',
                            },
                            transition: '0.2s linear',
                            transitionDelay: '0.3s',
                            mt: -7
                        }} disableElevation>
                            <Typography sx={{
                                textTransform: 'capitalize',
                                fontFamily: 'Montserrat, Arial, sans-serif',
                                fontSize: '20px',
                                lineHeight: '32px',
                                fontWeight: '700',
                                align: 'justify',
                            }}>
                                Order Now
                            </Typography>
                        </Button>
                        <img style={{ marginLeft: '50px' }} src={banner_arrow} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;