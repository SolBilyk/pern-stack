
import axios from './axios';

//Es para comunicar la parte front del formulario con la back
//creamos aca todas las peticiones que se necesiten para no tener que estar modificando cada vez el archivo de axios.js

export const crearTareaRequest = async (tarea) => { await axios.post("/tareas", tarea)}