
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const DataDisplay = ()=>{
    const {isAuth, toglleAuth}= useContext(AuthContext);

    return(
        <div>
            <h4>Welcome, You To Home page</h4>
            <p>You Are successfully Login</p>
            <h5>Token : {isAuth}</h5>
        </div>
    )
}