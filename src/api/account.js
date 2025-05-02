import axiosClient from "./axiosClient";

export async function login(email, password) {
    const res = await axiosClient.post("/account/login", { email, password });
    return res.data;
}

export async function register(email, password) {
    const res = await axiosClient.post("/account/register", {
        email,
        password
    });
    return res.data;
}

export async function logout() {
    const res = await axiosClient.post("/account/logout");
    return res.data;
}

export async function fetchUserApi() {
    const res = await axiosClient.get('/account/me', {
        method: 'GET',
        credentials: 'include'
    });
    if (!res.data) return null;
    return await res.data;
}