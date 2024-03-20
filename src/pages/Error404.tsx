import React from 'react';
import {Button, Container, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

export const Error404: React.FC = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
        }}>
            <Typography variant="h1" sx={{fontSize: '3rem', fontWeight: 'bold', marginBottom: 3}}>
                404
            </Typography>
            <Typography variant="subtitle1">
                Désolé, la page que vous cherchez n'existe pas.
            </Typography>
            <Link to="/">
                <Button variant="contained" color="primary">
                    Retour
                </Button>
            </Link>
        </Container>
    );
};