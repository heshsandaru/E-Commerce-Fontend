import type { User } from "../types/User";
import apiClient from "./apiClient";

export interface SignUpResponse{
    name: string;
    email: string;
    _id: string;
}

export interface LoginResponse {
    name: string;
    email: string;
    accessToken: string;
    _id: string;
    role: string;
}

export interface LogoutResponse {
    message: string;
}

export const signup = async (userData: User): Promise<SignUpResponse> => {
    const response = await apiClient.post("/auth/signup", userData);
    return response.data;
}

export const login = async (loginData: Omit<User, "name">): Promise<LoginResponse> => {
    const response = await apiClient.post("/auth/login", loginData);
    return response.data;
}