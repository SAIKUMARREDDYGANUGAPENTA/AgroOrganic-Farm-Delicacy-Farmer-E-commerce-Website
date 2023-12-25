import axios from "axios";
const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;
export const API_URL=`${BACKEND_URL}/api/`;

// !Register user
const register=async(userData)=>{
    const response=await axios.post(API_URL+"register",userData,{
        withCredentials:true,
    })
    return response.data
}

// ! Login user
const login=async(userData)=>{
    const response=await axios.post(API_URL+"login",userData);
    return response.data;
}

// ! Logout user
const logout=async()=>{
    const response=await axios.get(API_URL+"logout");
    return response.data.message;
}

// ! get login Status 
const getLoginStatus=async()=>{
    const response=await axios.get(API_URL+"getLoginStatus");
    return response.data;
}

// ! get User
const getUser=async()=>{
    const response=await axios.get(API_URL+"getuser");
    return response.data;
}

// ! Update User
const UpdateUser=async(userData)=>{
    const response=await axios.patch(API_URL+"updateUser",userData);
    return response.data;
}

const authService={
    register,
    login,
    logout,
    getLoginStatus,
    getUser,
    UpdateUser
}
export default authService