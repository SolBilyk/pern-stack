import { Card } from "../ui/Card"

export function CardTareas({ tarea }) {
    return (
        <Card key={tarea.id} >
            <h1 className='text-2xl font-bold'>{tarea.titulo}</h1>
            <p>{tarea.descripcion}</p>
        </Card>
    )
}

export default CardTareas
