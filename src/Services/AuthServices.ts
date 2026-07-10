import { registerUser } from "../Api/AuthApis";
import type { RegisterRequest } from "../Interface/RegisterRequest";

export let registerSevice = async (data: RegisterRequest) =>{

        //logics 
        
        return await registerUser(data);
}