import {Link} from 'react-router-dom'
import { Card } from '../components/ui'


// ESTO ES PARA CUANDO EL USUARIO SE EQUIVOQUE E INGRESE A UNA PAGINA QUE NO ES CORRECTA, LE APAREZCA ESTE ERROR
function NotFound() {
    return (
        <div className='h-[calc(100vh-64px)] flex items-center justify-center flex-col'>
            
            <Card>
                <h1 className='text-4xl font-bold my-2 text-center'> 404 </h1>
                <h3 className='text-xl text-center'> Página no encontrada</h3>
                <Link to='/' className='text-blue-500 hover:underline'> Volver al inicio </Link> 
            </Card>
        </div>
    )
}

export default NotFound