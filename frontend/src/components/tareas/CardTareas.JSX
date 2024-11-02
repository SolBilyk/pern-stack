import { Card, Button } from "../ui";
import { useTareas } from "../../context/TareasContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight, PiPencil } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export function CardTareas({ tarea }) {
    const { eliminarTarea } = useTareas();
    const navigate = useNavigate();
    return (
        // eslint-disable-next-line react/prop-types
        <Card key={tarea.id} className="py-4 px-7 justify-center flex flex-col">
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                <h1 className="text-2xl font-bold">{tarea.titulo}</h1>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="py-4">{tarea.descripcion}</p>
            </div>
            <div className="flex justify-end gap-x-2">
                {/* eslint-disable-next-line react/prop-types */}
                <Button onClick={() => navigate(`/tareas/${tarea.id}/editar`)}>
                    <PiPencil className="text-white" />
                    editar
                </Button>
                <Button
                    className="bg-red-500 hover:bg-red-600"
                    onClick={async () => {
                        if (window.confirm("¿Estas seguro de eliminar esta tarea?")) {
                            // eslint-disable-next-line react/prop-types
                            await eliminarTarea(tarea.id);
                        }
                    }}
                >
                    <PiTrashSimpleLight className="text-white" />
                    eliminar
                </Button>
            </div>
        </Card>
    );
}

export default CardTareas;