import React from 'react';
import './BannerDivider.css';
import { Box, Grid } from '@mui/material';
import { TERTIARY_COLOR, ACCENT_SECONDARY_LIGHT_COLOR } from './../../colors';
import Typography from '@mui/material/Typography';
import divider_arrow from './../../assets/divider_arrow.svg';
import divider_person_one from './../../assets/divider_person_one.svg';
import divider_person_two from './../../assets/divider_person_two.svg';
import divider_person_three from './../../assets/divider_person_three.svg';


const BannerDivider = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 17, backgroundColor: ACCENT_SECONDARY_LIGHT_COLOR, height: '124px' }}>
            <Grid container spacing={2}>
                <Grid item xs={10} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    mt: 2
                }} className='divider-animation'>
                    <Box>
                        <img src={divider_person_one} alt="divider person one" />
                        <img style={{
                            transform: 'translateX(-35px)',
                        }} src={divider_person_two} alt="divider person two" />
                        <img style={{
                            transform: 'translateX(-68px)',
                        }} src={divider_person_three} alt="divider person three" />
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '24px',
                            textAlign: 'justify',
                            ml: -6
                        }}>
                            12,000+ <br />
                            Happy Customers
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={10} md={4} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    mt: 2,
                    ml: 6
                }}>
                    <Typography sx={{
                        color: TERTIARY_COLOR,
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '24px',
                        textAlign: 'justify',
                        mr: 1.5
                    }}>
                        <u>What People Say?</u>
                    </Typography>
                    <img src={divider_arrow} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default BannerDivider;



