import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import config from "@/config/config-app.ts";

class HttpService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: config.api.baseUrl,
            timeout: config.api.timeout,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-App-Name': config.app.name,
                'X-App-Version': config.app.version,
            }
        });

        this.axiosInstance.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            const tenantId = localStorage.getItem('tenant_id');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            if (tenantId) {
                config.headers['X-Tenant-Id'] = tenantId;
            }
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
    }

    public async get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axiosInstance.get<T, R>(url, config);
    }

    public async post<T, B = object, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.axiosInstance.post<T, R>(url, data, config);
    }

    public async put<T, B = object, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.axiosInstance.put<T, R>(url, data, config);
    }

    public async patch<T, B = object, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.axiosInstance.patch<T, R>(url, data, config);
    }

    public async delete<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axiosInstance.delete<T, R>(url, config);
    }
}

export default new HttpService();