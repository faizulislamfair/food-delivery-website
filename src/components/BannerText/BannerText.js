import React from 'react';
import './BannerText.css';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const BannerText = () => {
    return (
        <Container sx={{
            mt: '70px',
        }}>
            <Typography variant="h2" sx={{
                fontWeight: '800',
                fontSize: '64px',
                lineHeight: '78.02px',
                textAlign: 'center'
            }}>
                Delicious <span className='food-text'>Food</span>,<br />
                Delivered Right to Your <span className='doorstep-text'>Doorstep</span>
            </Typography>
        </Container>
    );
};

export default BannerText;



