import axios, { AxiosError } from 'axios'


export const BASE_URL = import.meta.env.VITE_API_BASE_URL

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

export const setHeader = (accessToken: string) => {
    if (accessToken !== "") {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }else {
        delete apiClient.defaults.headers.common['Authorization']
    }
}

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true
            try {
                const result = await apiClient.post('/auth/refresh-token')
                const newAccessToken = result.data.accessToken 
                setHeader(newAccessToken)
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                return apiClient(originalRequest)
            } catch (err) {
                if (error instanceof AxiosError) {
                    if (error.response?.status === 403) {
                    window.location.href = "/auth/login"
             }
            }
            }    
        }
    }
)
export default apiClient