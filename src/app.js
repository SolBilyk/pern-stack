import express from "express";
import morgan from "morgan";
import tareasRoutes from "./router/tareas.routes.js"
import authRoutes from "./router/auth.routes.js"
import cookieParser from "cookie-parser";

const app = express(); //esta constante lanza a express
//Middlewares
app.use(morgan("dev"));
//transformamos todos los objetos a formato de javascript
//cookieParser
app.use(cookieParser());
app.use(express.json());
//formularios
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => res.json({ message: "Bienvenidos a mi proyecto"}));
app.use('/api', tareasRoutes);
app.use('/api', authRoutes);

//Manejador de errores
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;

//empezar la clase 2 y para hacer correr el programa poner en la terminal npm run dev 