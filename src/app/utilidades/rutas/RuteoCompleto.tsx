import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

import { Principal } from "../../vistas/publicas/Principal"
import { InicioSesion } from "../../vistas/publicas/InicioSesion"
import { RegistroSesion } from "../../vistas/publicas/RegistroSesion"
import { NoEncontrado } from "../../vistas/compartidas/NoEncontrado"

import { Vigilante } from "../../seguridad/Vigilante";
import UsuarioSesion from "../../seguridad/UsuarioSesion";
import { TableroPrincipal } from "../../contenedores/TableroPrincipal";

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
const LazyTablero = lazy(() => import("../../contenedores/TableroPrincipal").then(() => ({ default: TableroPrincipal, })) );

export const RuteoCompleto = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<LazyPrincipal />} />
    //   <Route path="/login" element={<LazyInicioSesion />} />
    //   <Route path="/register" element={<LazyRegistroSesion />} />

    //   <Route path="/*" element={<LazyNoEncontrado />} />
    // </Routes>
    <UsuarioSesion>
      <Routes>
        <Route path="/" element={<LazyPrincipal />} />
        <Route path="/login" element={<LazyInicioSesion />} />
        <Route path="/register" element={<LazyRegistroSesion />} />

        <Route element={<Vigilante />}>
          <Route path="/dashboard/*" element={<LazyTablero />} />
        </Route>

        <Route path="*" element={<LazyNoEncontrado />} />
      </Routes>
    </UsuarioSesion>
  )
}
