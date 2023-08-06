import { Outlet } from "react-router-dom";
import LoginForm from "./LoginForm";
const useAuth=()=>{
    const user={loggedin: false};
    return user && user.loggedin;
}

const ProtectedRoutes=()=>{
    
    const isAuth=useAuth();
    return isAuth ? <Outlet/>:<LoginForm replace />;
};
export default ProtectedRoutes;