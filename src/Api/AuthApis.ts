//import axios from "axios";
import type { RegisterRequest } from "../Interface/RegisterRequest";
import axiosInstance from "./AxiosConfig";


export let registerUser = async (data: RegisterRequest) => {

    return await axiosInstance.post("/auth/register",data);
    
}