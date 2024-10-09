import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controller.js";

const router = Router();

//listado de tareas
router.get('/tareas', listarTareas );

//obtencion de una tarea
router.get('/tareas/:id', listarTarea );

//cuando el usuario cree una tarea va a ser a traves del metodo post
router.post('/tareas', crearTarea);

//actualizar una tarea
router.put('/tareas', actualizarTarea);

//eliminar una tarea
router.delete('/tareas/:id', eliminarTarea);

export default router;