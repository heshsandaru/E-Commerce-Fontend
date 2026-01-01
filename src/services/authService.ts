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

export const signup = async (userData: User): Promise<SignUpResponse> => {}