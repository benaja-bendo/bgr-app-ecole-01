import React from "react";
import {Container, Typography, Button, Stack} from '@mui/material';
import {useRouteError, isRouteErrorResponse, useNavigate} from "react-router-dom";
import {ErrorResponse} from "@remix-run/router/utils.ts";
import {Player} from '@lottiefiles/react-lottie-player';
import Error404 from "@/assets/json/404.json";
import {AxiosError} from "axios";

export function CustomErrorBoundary() {
    const navigate = useNavigate();
    const error = useRouteError() as ErrorResponse | AxiosError;
    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 401:
                return (<CustomErrorFallback
                    error={error}
                    status={error.status}
                    message={error.data.message}
                    resetErrorBoundary={() => navigate('/')}/>);
            case 404:
                return (<CustomErrorFallback
                    error={error}
                    status={error.status}
                    message={error.data.message}
                    resetErrorBoundary={() => navigate('/')}/>);
            case 500:
                return (<CustomErrorFallback
                    error={error}
                    status={error.status}
                    message={error.data.message}
                    resetErrorBoundary={() => navigate('/')}/>);
            case 405:
                return (<CustomErrorFallback
                    error={error}
                    status={error.status}
                    message={error.data.message}
                    resetErrorBoundary={() => navigate('/')}/>);
            default:
                return (<CustomErrorFallback
                    error={error}
                    status={error.status}
                    message={error.data.message}
                    resetErrorBoundary={() => {
                        navigate('/')
                    }}/>);

        }
    } else if (error instanceof AxiosError) {
        console.log('AxiosError', error)
        return (<CustomErrorFallback
            status={error.response?.status}
            message={error.message}
            resetErrorBoundary={() => navigate('/')}/>);
    } else {
        return <div>Oops</div>;
    }
}

interface CustomErrorFallbackProps {
    error?: ErrorResponse | AxiosError
    status?: number
    message?: string
    cover?: React.ReactNode
    resetErrorBoundary?: () => void
}

export function CustomErrorFallback({status, message, resetErrorBoundary}: CustomErrorFallbackProps) {
    return (<>
        <Container sx={{}}>
            <Player
                src={Error404}
                autoplay={true}
                loop={true}
                style={{height: '300px', width: '300px'}}/>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="h1" sx={{fontSize: '3rem', fontWeight: 'bold', p: 1}}>
                    {status}
                </Typography>
                <Typography variant="subtitle1" sx={{p: 3}}>
                    {message}
                </Typography>
                <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
                    Try again
                </Button>
            </Stack>
        </Container>
    </>);
}