import { useSelector } from "react-redux";


export const ShowOnLogin=({children}) => { 
    const {isLoggedIn}=useSelector((state)=>state.auth );
    return isLoggedIn ? children :null
   
 };

export const ShowOnLogout=({children}) => { 
    const {isLoggedIn}=useSelector((state)=>state.auth);
    return isLoggedIn ? null :children
   
 }
 export default ShowOnLogin;
 