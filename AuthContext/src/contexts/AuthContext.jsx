import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvidor = ({children})=>{
    const [isAuth, setIsAuth] = useState(false);
    const toggleAuth =()=>{

        if(isAuth==false){
            axios.post(`https://reqres.in/api/login`, {
                email: "eve.holt@reqres.in",
                password: "cityslicka",
            }).then((e)=>{
                setIsAuth(e.data.token);
            })
            .catch((error)=>{
                console.log(error);
            });
        }else{
            setIsAuth(()=>{
                return false;
            })
        }
    }

    // childrena Work Not Got it
    return <AuthContext.Provider value={{isAuth, toggleAuth}}>{children}</AuthContext.Provider>
}