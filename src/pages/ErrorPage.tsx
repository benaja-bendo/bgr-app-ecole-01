import React from 'react';
import { Container, Typography, Button } from '@mui/material';

export const ErrorPage: React.FC = () => {
  const handleBack = () => {
      // TODO: handle back
      console.log('handleBack');
  };

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
    }}>
      <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 3 }}>
        404
      </Typography>
      <Typography variant="subtitle1">
        Désolé, la page que vous cherchez n'existe pas.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleBack}>
        Retour
      </Button>
    </Container>
  );
};