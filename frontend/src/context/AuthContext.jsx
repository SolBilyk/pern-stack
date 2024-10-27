//Se crea un contexto, este es un componente que engloba a los demas componentes de react, este va a tener los datos del usuario, si esta logueado o no, 
//si esta autentificado o no, nos dice si hay errores y se le puede dar algunos accesos a determinadas secciones o paginas de nuestra aplicacion

// El provider espera un elemento hijo y retorna el context provider
import { createContext, useContext, useState } from "react";  
import axios from "axios";

export const AuthContext= createContext();

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
} 


//se va a colocar en main.js donde se ejecuta toda la aplicacion completa
export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

    const signin = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signin", data, {
            withCredentials: true,
        });
        console.log(res.data);
        setUser(res.data);
    };

    const signup = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signup", data, {
            withCredentials: true,
            });
            console.log(res.data); 
            setUser(res.data);
    }

    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors,
        signup,
        setUser,
        signin,
        
    }}>
        {children}
    </AuthContext.Provider>
}
