import express from "express";
import morgan from "morgan";

const app = express(); //esta constante lanza a express

app.use(morgan("dev"));
//transformamos todos los objetos a formato de javascript
app.use(express.json());
//formularios
app.use(express.urlencoded({extends: false}));

app.get("/", (req, res) => res.json({ message: "Bienvenidos a mi proyecto"}));

//Manejador de errores
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;