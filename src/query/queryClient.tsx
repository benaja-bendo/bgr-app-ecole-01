import {QueryClient, QueryClientConfig} from "@tanstack/react-query";


const config :QueryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            // refetchOnMount: false,
        },
    },
};

export const queryClient = new QueryClient(config);
