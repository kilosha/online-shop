import axios from "axios";

export const publicRequest = axios.create({
    baseURL: process.env.BASE_URL
})