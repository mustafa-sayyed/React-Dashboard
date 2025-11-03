import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})


export const login = (data: { email: string; password: string }) => {
    return api.post("/users/login", data);
}

export const signup = (data: {name: string, email: string, password: stirng}) => {
    return api.post("/users/signup", data);
}