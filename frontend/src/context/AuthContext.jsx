//Se crea un contexto, este es un componente que engloba a los demas componentes de react, este va a tener los datos del usuario, si esta logueado o no, 
//si esta autentificado o no, nos dice si hay errores y se le puede dar algunos accesos a determinadas secciones o paginas de nuestra aplicacion

// El provider espera un elemento hijo y retorna el context provider
import { createContext, useContext, useState, useEffect } from "react";  
import Cookie from 'js-cookie';
import axios from "../api/axios";


export const AuthContext= createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
} 


//se va a colocar en main.js donde se ejecuta toda la aplicacion completa
// eslint-disable-next-line react/prop-types
export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

//Se captura el error para el frontend
    const signin = async (data) => {
        try{
            const res = await axios.post("/signin", data);

            //console.log(res.data);
            setUser(res.data);
            setIsAuth(true);
            return res.data;
        } catch (error) {
            console.log(error)
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message]); //se guarda el error y se muestr como arreglo
        }
    };

    const signup = async (data) => {
        try{
            const res = await axios.post("/signup", data);
            //console.log(res.data);
            setUser(res.data);
            setIsAuth(true);
            return res.data;
        } catch (error) {
            console.log(error)
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message]); //se guarda el error y se muestr como arreglo
        }
    };

    useEffect(() => {  //Esto le pide al backend de vuelta que lea la cookie y que nos proporcione nuevamente los datos al frontend y que no se salga de la aplicacion cuando el usuario hace el login
        //el js-cookie que instalamos permite instalar las cookies (esto es del front) de una forma sencilla
        //console.log(Cookie.get('token'))
        //const token = Cookie.get('token');
    //if (token) {
        //console.log('Token encontrado:', token);
    //} else {
        //console.log('Token no encontrado');
    //}
        if(Cookie.get('token')) {
            axios.get("http://localhost:3000/api/profile").then((res) => {
                setUser(res.data);
                setIsAuth(true);
            }).catch((error) => {
                setUser(null);
                setIsAuth(false);
                console.log(error);
                
            });
        }
    }, []);

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
