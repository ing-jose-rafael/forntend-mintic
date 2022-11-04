import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import './App.css';
// import { Principal } from './app/vistas/publicas/Principal';
import { RuteoCompleto } from './app/utilidades/rutas/RuteoCompleto';

const cargando = (
  <div className="d-flex justify-content-center">
    <div className="mt-3">
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" ></span>
        Cargando ...
      </button>
    </div>
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
