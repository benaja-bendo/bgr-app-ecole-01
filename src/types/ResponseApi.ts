export type ResponseApi<T> = {
    code: number,
    message: string,
    data: T,
}