import React from "react";
import {Container, Typography, Button} from '@mui/material';
import {useRouteError, isRouteErrorResponse, useNavigate} from "react-router-dom";
import {ErrorResponse} from "@remix-run/router/utils.ts";
import {Player} from '@lottiefiles/react-lottie-player';
import Error404 from "@/assets/json/404.json";

export function CustomErrorBoundary() {
    const navigate = useNavigate();
    const error = useRouteError() as ErrorResponse;
    console.log('error CustomErrorBoundary :>>', error);
    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 401:
                return (<CustomErrorFallback
                    error={error}
                    resetErrorBoundary={() => navigate('/')}/>);
            case 404:
                return (<CustomErrorFallback
                    error={error}
                    resetErrorBoundary={() => navigate('/')}/>);
            case 500:
                return (<CustomErrorFallback
                    error={error}
                    resetErrorBoundary={() => navigate('/')}/>);
            case 405:
                return (<CustomErrorFallback
                    error={error}
                    resetErrorBoundary={() => navigate('/')}/>);
            default:
                return (<CustomErrorFallback
                    error={error}
                    resetErrorBoundary={() => {
                        console.log('resetErrorBoundary')
                        navigate('/')
                    }}/>);

        }
    } else {
        return <div>Oops</div>;
    }
}

interface CustomErrorFallbackProps {
    error: ErrorResponse
    cover?: React.ReactNode
    resetErrorBoundary?: () => void
}

export function CustomErrorFallback({error, resetErrorBoundary}: CustomErrorFallbackProps) {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            p: 3,
        }}>
            <Player
                src={Error404}
                autoplay={true}
                loop={true}
                style={{height: '300px', width: '300px'}}/>
            <Typography variant="h1" sx={{fontSize: '3rem', fontWeight: 'bold', p: 1}}>
                {error.status}
            </Typography>
            <Typography variant="subtitle1" sx={{p: 3}}>
                {error.data.message}
            </Typography>
            <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
                Try again
            </Button>
        </Container>
    );
}