
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
import "../css/Navbar.css"

export const Navbar = ()=>{
    const {isAuth, toggleAuth} = useContext(AuthContext);

    return (
        <div className="main-1">
            <button onClick={()=>{
               toggleAuth();

            }}>
                {isAuth===false ? "Login" : "LogOut"}
            </button>
        </div>
    )
}