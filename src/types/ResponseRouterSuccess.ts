export type ResponseRouterSuccess = {
    message: string;
    success: boolean;
    status?: number;
    statusText?: string;
    data?: unknown;
    headers?: unknown;
    config?: unknown;
    request?: unknown;
    response?: unknown;
}