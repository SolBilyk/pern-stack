//Para hacer correr el servidor siempre tengo que entrar a la ruta de frontend cd frontend y ahi escribir npm run dev
//Este es el archivo de la app, la parte del front
import { Routes, Route} from 'react-router-dom' //Sirve para reagrupar todas las paginas que queremos para poder tener diferentes paginas y rutas, por ej una para el perfil, otra para tareas, etc 
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import TareasPage from './pages/TareasPage'
import TareaFormPage from './pages/TareaFormPage'

function App() {
  return ( 
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      
      <Route path='/perfil' element={<ProfilePage/>}/>
      <Route path='/tareas' element={<TareasPage/>} />
      <Route path='/tareas/crear' element={<TareaFormPage />} />
      <Route path='/tareas/editar/:id' element={<TareaFormPage/>} />
    </Routes>
  )
}

export default App 
