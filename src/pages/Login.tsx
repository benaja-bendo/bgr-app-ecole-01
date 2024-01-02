import {ChangeEvent, FC, useCallback, useState} from 'react';
import {Form, useActionData, useLocation, useNavigation} from "react-router-dom";
import {Alert, Box, Button, FormHelperText, Stack, Tab, Tabs, TextField, Typography} from "@mui/material";

export const Login: FC = () => {
    const [method, setMethod] = useState('email');
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const from = params.get("from") || "/";
    const navigation = useNavigation();

    const isLoggingIn = navigation.formData?.get("username") != null;

    const actionData = useActionData() as { error: string } | undefined;
    const handleMethodChange = useCallback(
        (_: ChangeEvent<object>, value: string) => {
            setMethod(value);
        },
        []
    );
    return (<>
        <Box
            sx={{
                backgroundColor: 'background.paper',
                flex: '1 1 auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    maxWidth: 550,
                    px: 3,
                    py: '100px',
                    width: '100%'
                }}
            >
                <div>
                    <Stack
                        spacing={1}
                        sx={{mb: 3}}
                    >
                        <Typography variant="h4">
                            Login
                        </Typography>
                    </Stack>
                    <Tabs
                        onChange={handleMethodChange}
                        sx={{mb: 3}}
                        value={method}
                    >
                        <Tab
                            label="Email"
                            value="email"
                        />
                        <Tab
                            label="Phone Number"
                            value="phoneNumber"
                        />
                    </Tabs>
                    {method === 'email' && (
                        <Form method="post" replace>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    name="redirectTo"
                                    type="hidden"
                                    value={from}
                                />
                                <TextField
                                    fullWidth
                                    value={"demo@devias.io"}
                                    label="Email Address"
                                    name="username"
                                    type="email"
                                />
                                <TextField
                                    fullWidth
                                    value={"Password123!"}
                                    label="Password"
                                    name="password"
                                    type="password"
                                />
                            </Stack>
                            {actionData && actionData.error ? (
                                <FormHelperText sx={{mt: 3}} color="error">
                                    {actionData.error}
                                </FormHelperText>
                            ) : null}
                            <Button
                                fullWidth
                                size="large"
                                sx={{mt: 3}}
                                type="submit"
                                variant="contained"
                                disabled={isLoggingIn}
                            >
                                {isLoggingIn ? "Logging in..." : "Login"}
                            </Button>
                            <Alert
                                severity="info"
                                sx={{mt: 3}}
                            >
                                <div>
                                    You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                                </div>
                            </Alert>
                        </Form>
                    )}
                    {method === 'phoneNumber' && (
                        <div>
                            <Typography
                                sx={{mb: 1}}
                                variant="h6"
                            >
                                Not available in the demo
                            </Typography>
                            <Typography color="text.secondary">
                                To prevent unnecessary costs we disabled this feature in the demo.
                            </Typography>
                        </div>
                    )}
                </div>
            </Box>
        </Box>
    </>);
}
export default Login;