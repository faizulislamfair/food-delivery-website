import React from 'react';
import './RouteNotFound.css';
import Container from '@mui/material/Container';


const RouteNotFound = () => {
    return (
        <Container sx={{
            marginY: 12,
            padding: 12,
            backgroundColor: '#FF8A65',
            fontSize: 35,
            fontWeight: 'bold',
            textAlign: 'center',
            border: 'solid 2px #FF8A65',
            borderRadius: '15px',
            width: '50%'
        }}>
            Route Not Found: <span style={{ color: '#ffffff' }}>404 Error!</span>
        </Container>
    );
};

export default RouteNotFound;