import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

import { NoEncontrado } from "../../vistas/compartidas/NoEncontrado"
import { InicioSesion } from "../../vistas/publicas/InicioSesion"
import { Principal } from "../../vistas/publicas/Principal"
import { RegistroSesion } from "../../vistas/publicas/RegistroSesion"

const LazyPrincipal = lazy(() =>
  import('../../vistas/publicas/Principal').then(() => ({ default: Principal }))
);
const LazyInicioSesion = lazy(() =>
  import('../../vistas/publicas/InicioSesion').then(() => ({ default: InicioSesion }))
);
const LazyRegistroSesion = lazy(() =>
  import('../../vistas/publicas/RegistroSesion').then(() => ({ default: RegistroSesion }))
);
const LazyNoEncontrado = lazy(() =>
  import('../../vistas/compartidas/NoEncontrado').then(() => ({ default: NoEncontrado }))
);

export const RuteoCompleto = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyPrincipal />} />
      <Route path="/login" element={<LazyInicioSesion />} />
      <Route path="/register" element={<LazyRegistroSesion />} />

      <Route path="/*" element={<LazyNoEncontrado />} />
    </Routes>
  )
}
