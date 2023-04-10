import React from 'react';
import './FeaturedDishes.css';
import { Box, Button, Grid, Paper, Typography, Stack } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './../../colors';
import dishes_arrow from './../../assets/dishes_arrow.svg';
import clock from './../../assets/clock.svg';
import customer from './../../assets/customer.svg';
import star from './../../assets/star.svg';
import cart from './../../assets/cart.svg';
import dish_left_arrow from './../../assets/dish_left_arrow.svg';
import dish_right_arrow from './../../assets/dish_right_arrow.svg';
import ramen from './../../assets/ramen.svg';
import pizza from './../../assets/pizza.svg';
import steak from './../../assets/steak.svg';
import thai_food from './../../assets/thai_food.svg';
import tofu from './../../assets/tofu.svg';
import fried_rice from './../../assets/fried_rice.svg';


const FeaturedDishes = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 16 }}>
            <Grid
                container
                spacing={-5}
            >
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>



                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '40px',
                        lineHeight: '48px',
                        textAlign: 'justify',
                        mr: 16
                    }}>
                        Featured Dishes
                    </Typography>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '32px',
                        textAlign: 'justify',
                        width: '472px',
                        mt: 3
                    }}>
                        Discover the best dishes from top local restaurants on PlateDrop. Our selection features a range of delicious options, prepared with the freshest ingredients and expert techniques. From classic comfort food to gourmet specialties, there's something for everyone. Check out our featured dishes today and satisfy your cravings!
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pl: 3.5,
                        mt: 3
                    }}>
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '24px',
                            textAlign: 'justify',
                            width: '472px',
                            color: TERTIARY_COLOR,
                        }}>
                            <u>View Full Menu</u>
                        </Typography>
                        <img style={{
                            transform: 'translateX(-330px)',
                        }} src={dishes_arrow} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 236,
                                height: 324,
                            },
                            justifyContent: 'space-evenly'
                        }}
                    >

                        <Paper elevation={3} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: '0px solid #000000',
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                            borderBottomLeftRadius: '30px',
                            borderBottomRightRadius: '30px',
                            boxShadow: '0px 8px 16px rgba(30, 30, 30, 0.1)'
                        }}>
                            <img style={{
                                marginBottom: '16px'
                            }} src={ramen} alt="" />
                            <Typography sx={{
                                fontWeight: '700',
                                fontSize: '20px',
                                lineHeight: '32px',
                                textAlign: 'justify',
                                marginBottom: '3px'
                            }}>Ichiraku Ramen</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                marginBottom: '2px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',

                                }}>
                                    <img src={clock} alt="" />
                                    <Typography sx={{
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '32px',
                                        textAlign: 'justify',
                                        pl: 1
                                    }}>
                                        15 mins
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    pl: 4
                                }}>
                                    <img src={customer} alt="" />
                                    <Typography sx={{
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '32px',
                                        textAlign: 'justify',
                                        pl: 1
                                    }}>
                                        Serves 2
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginBottom: '14px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <img src={star} alt="" />
                                    <Typography sx={{
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '32px',
                                        textAlign: 'justify',
                                        pl: 1
                                    }}>
                                        4.7
                                    </Typography>
                                </Box>
                                <Typography sx={{
                                    color: TERTIARY_COLOR,
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    lineHeight: '32px',
                                    textAlign: 'justify',
                                    pl: 9
                                }}>
                                    <u>See Details</u>
                                </Typography>
                            </Box>
                            <Button variant='outlined' sx={{
                                width: '135px',
                                height: '36px',
                                color: '#1E1E1E',
                                fontWeight: '500',
                                fontSize: '12px',
                                lineHeight: '15px',
                                textAlign: 'justify',
                                textTransform: 'capitalize',
                                border: '1px solid',
                                borderColor: SECONDARY_COLOR,
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: SECONDARY_COLOR,
                                    borderColor: SECONDARY_COLOR,
                                }
                            }}>Add to cart <img style={{
                                paddingLeft: '10px'
                            }} src={cart} alt="" /></Button>
                        </Paper>

                        <Paper elevation={3} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTop: '0px solid #000000',
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                            borderBottomLeftRadius: '30px',
                            borderBottomRightRadius: '30px',
                            boxShadow: '0px 8px 16px rgba(30, 30, 30, 0.1)'
                        }}>
                            <img style={{
                                marginBottom: '16px'
                            }} src={pizza} alt="" />
                            <Typography sx={{
                                fontWeight: '700',
                                fontSize: '20px',
                                lineHeight: '32px',
                                textAlign: 'justify',
                                marginBottom: '3px'
                            }}>Pizza</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                marginBottom: '2px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',

                                }}>
                                    <img src={clock} alt="" />
                                    <Typography sx={{
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '32px',
                                        textAlign: 'justify',
                                        pl: 1
                                    }}>
                                        15 mins
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    pl: 4
                                }}>
                                    <img src={customer} alt="" />
                                    <Typography sx={{
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '32px',
                                        textAlign: 'justify',
                                        pl: 1
                                    }}>
                                        Serves 2
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginBottom: '14px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <img src={star} alt="" />
                                    <Typography sx={{
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '32px',
                                        textAlign: 'justify',
                                        pl: 1
                                    }}>
                                        4.7
                                    </Typography>
                                </Box>
                                <Typography sx={{
                                    color: TERTIARY_COLOR,
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    lineHeight: '32px',
                                    textAlign: 'justify',
                                    pl: 9
                                }}>
                                    <u>See Details</u>
                                </Typography>
                            </Box>
                            <Button variant='outlined' sx={{
                                width: '135px',
                                height: '36px',
                                color: '#1E1E1E',
                                fontWeight: '500',
                                fontSize: '12px',
                                lineHeight: '15px',
                                textAlign: 'justify',
                                textTransform: 'capitalize',
                                border: '1px solid',
                                borderColor: SECONDARY_COLOR,
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: SECONDARY_COLOR,
                                    borderColor: SECONDARY_COLOR,
                                }
                            }}>Add to cart <img style={{
                                paddingLeft: '10px'
                            }} src={cart} alt="" /></Button>
                        </Paper>



                    </Box>

                    <Stack direction="row" justifyContent="" sx={{
                        alignSelf: 'flex-end',
                        transform: 'translateY(70%)'
                    }}>
                        <img style={{
                            paddingRight: '70px'
                        }} src={dish_left_arrow} alt="" />
                        <img style={{
                            paddingRight: '90px'
                        }} src={dish_right_arrow} alt="" />
                    </Stack>

                </Grid>
            </Grid>
        </Box>
    );
};

export default FeaturedDishes;



