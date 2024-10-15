import {pool} from "../db.js"
import bcrypt from "bcrypt";
import {createAccessToken} from "../libs/jwt.js"

export const signin = (req, res) => res.send("ingresando")

export const signup = async(req, res) => {
    const {name, email, password} = req.body;

    try {
        //encriptamos el password usando la libreria bcrypt (el numero es la canidad de veces que se repite el algoritmos)
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        const result = await pool.query('INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) Returning *', [name, email, hashedPassword])
        //Le indica al usuario que el usuario ya esta creado y autentificado entonces podes usar estos datos que te voy a mandar, o sugerir. en base a esos datos manda un token y desde el backend se pueden controlar los permisos que se le dan al usuario
        //hacemos el token en otra carpeta, la libs
        const token = await createAccessToken({id: result.rows[0].id});
        console.log(result);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            maxAge: 60 * 60 * 24 * 1000,}); 
            //solo para que lo lean las http, sameSite solo lo lee el mismo sitio el valor es none porque el frontend se puede tener en distinto dominio, maxAge es cuanto quiero que dure la cookie 1000 milisegundos, total 1 dia

        return res.json(result.rows[0]);

    } catch (error) {
        if(error.code === "23505") {
            return res.status(400).json({message: "El correo ya esta registrado"});
        }
    }

//cookies: los navegadores la guardan de forma automatica

};


export const signout = (req, res) => res.send("Cerrando sesion")

export const profile = (req, res) => res.send("Perfil de usuario")