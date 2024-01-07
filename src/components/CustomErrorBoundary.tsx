import {Container, Typography, Button} from '@mui/material';
import {useRouteError, isRouteErrorResponse, redirect} from "react-router-dom";
import {ErrorResponse} from "@remix-run/router/utils.ts";

export function DefaultErrorFallback({message, resetErrorBoundary}: {
    message: string,
    resetErrorBoundary: () => void
}) {
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
                Something went wrong
            </Typography>
            <Typography variant="subtitle1">
                {message}
            </Typography>
            <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
                Try again
            </Button>
        </Container>
    );
}

export function CustomErrorFallback({error}: { error: ErrorResponse }) {
    const resetErrorBoundary = () => {
        console.log('resetErrorBoundary')
        return redirect('/')
    }
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
                {error.status}
            </Typography>
            <Typography variant="subtitle1">
                {error.data.message}
            </Typography>
            <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
                Try again
            </Button>
        </Container>
    );
}

export function CustomErrorBoundary() {
    const error = useRouteError() as ErrorResponse;

    if (isRouteErrorResponse(error) && error.status === 401) {
        return (<CustomErrorFallback error={error}/>);
    }
    return <DefaultErrorFallback
        message={error?.data?.message || 'An error occurred'}
        resetErrorBoundary={() => {
            console.log('resetErrorBoundary')
            return redirect('/')
        }}/>;
}