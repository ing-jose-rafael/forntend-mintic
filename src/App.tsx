import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { Principal } from './app/vistas/publicas/Principal';
import { RuteoCompleto } from './app/utilidades/rutas/RuteoCompleto';

const cargando = (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Cargando...</span>
  </div>
);

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Suspense fallback={cargando}>
          <RuteoCompleto />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
