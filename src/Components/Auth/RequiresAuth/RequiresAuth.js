import { Navigate, useLocation } from "react-router";
import {useAuth} from "../../../Context/AuthContext";
const RequiresAuth = ({children})=>{
    const {isLoggedIn} = useAuth();
    const location = useLocation();
    return (
<div>
{isLoggedIn ? <>{children}</> : <Navigate to ="/Login" state={{from: location}}/> }
</div>
    )
}
export {RequiresAuth}