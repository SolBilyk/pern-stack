import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'  //BrowserRouter lo que hace es generar un contexto, nos da las rutas que necesitamos

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    
  </StrictMode>,
)
