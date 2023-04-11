import React, { useState } from 'react';
import './FeaturedDishes.css';
import { Box, Button, Grid, Paper, Typography, Stack } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './../../colors';
import { Container } from '@mui/system';
import dishes_arrow from './../../assets/dishes_arrow.svg';
import clock from './../../assets/clock.svg';
import customer from './../../assets/customer.svg';
import star from './../../assets/star.svg';
import dish_left_arrow from './../../assets/dish_left_arrow.svg';
import dish_right_arrow from './../../assets/dish_right_arrow.svg';
import ramen from './../../assets/ramen.svg';
import pizza from './../../assets/pizza.svg';
import steak from './../../assets/steak.svg';
import thai_food from './../../assets/thai_food.svg';
import tofu from './../../assets/tofu.svg';
import fried_rice from './../../assets/fried_rice.svg';
import cart from './../../assets/cart.svg';
import clicked_cart from './../../assets/clicked_cart.svg';




const FeaturedDishes = () => {

    const [dishesButtonOne, setDishesButtonOne] = useState(false);
    const [dishesButtonTwo, setDishesButtonTwo] = useState(false);


    const handleDishesButtonOne = () => {
        setDishesButtonOne(true);
    }

    const handleDishesButtonTwo = () => {
        setDishesButtonTwo(true);
    }


    return (
        < Box sx={{ flexGrow: 1, mt: 16 }
        }>
            <Grid
                container
            >
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 5
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
                        maxWidth: '472px',
                        mt: 3,
                    }}>
                        Discover the best dishes from top local restaurants on PlateDrop. Our selection features a range of delicious options, prepared with the freshest ingredients and expert techniques. From classic comfort food to gourmet specialties, there's something for everyone. Check out our featured dishes today and satisfy your cravings!
                    </Typography>
                    <Container>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            mt: 3,
                            ml: 15
                        }}>
                            <Typography sx={{
                                fontWeight: '600',
                                fontSize: '16px',
                                lineHeight: '24px',
                                textAlign: 'justify',
                                color: TERTIARY_COLOR,
                                pr: 1,
                            }}>
                                <u>View Full Menu</u>
                            </Typography>
                            <img style={{
                            }} src={dishes_arrow} alt="" />
                        </Box>
                    </Container>
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
                            mt: 1,
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
                            <Button onClick={handleDishesButtonOne}
                                variant='outlined' sx={{
                                    backgroundColor: dishesButtonOne ? PRIMARY_COLOR : 'transparent',
                                    width: dishesButtonOne ? '160px' : '150px',
                                    transition: '0.5s ease-out',
                                    height: '36px',
                                    color: '#1E1E1E',
                                    fontWeight: dishesButtonOne ? '600' : '500',
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
                                    },

                                }}>{dishesButtonOne ? 'Added to cart' : 'Add to cart'}


                                {
                                    dishesButtonOne ?
                                        <img style={{
                                            paddingLeft: '10px'
                                        }} src={clicked_cart} alt="" />
                                        :
                                        <img style={{
                                            paddingLeft: '10px'
                                        }} src={cart} alt="" />
                                }


                            </Button>
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
                            <Button onClick={handleDishesButtonTwo}
                                variant='outlined' sx={{
                                    backgroundColor: dishesButtonTwo ? PRIMARY_COLOR : 'transparent',
                                    width: dishesButtonTwo ? '160px' : '150px',
                                    transition: '0.5s ease-out',
                                    height: '36px',
                                    color: '#1E1E1E',
                                    fontWeight: dishesButtonTwo ? '600' : '500',
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

                                }}>{dishesButtonTwo ? 'Added to cart' : 'Add to cart'}

                                {
                                    dishesButtonTwo ?
                                        <img style={{
                                            paddingLeft: '10px'
                                        }} src={clicked_cart} alt="" />
                                        :
                                        <img style={{
                                            paddingLeft: '10px'
                                        }} src={cart} alt="" />
                                }

                            </Button>
                        </Paper>



                    </Box>

                    <Stack direction="row" justifyContent="" sx={{
                        alignSelf: 'flex-end',
                        transform: 'translate(-90%, 70%)'
                    }}>
                        <img style={{
                            paddingRight: '65px'
                        }} src={dish_left_arrow} alt="" />
                        <img src={dish_right_arrow} alt="" />
                    </Stack>

                </Grid>
            </Grid>
        </Box >
    );
};

export default FeaturedDishes;





