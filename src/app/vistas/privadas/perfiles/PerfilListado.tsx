import { useState, useEffect } from "react";

import Perfil from "../../../modelos/Perfil";
import ApiBack from "../../../utilidades/dominios/ApiBack";
import ServicioPrivado from "../../../servicios/ServicioPrivado";



export const PerfilListado = () => {
  // Variables
  const [arregloPerfiles, setArregloPerfiles] = useState<Perfil[]>([]);
  // ************************************************************************

  // Función para obtener perfiles
  const obtenerPerfiles = async () => {
    const resultado = await ServicioPrivado.peticionGET(ApiBack.PERFILES_OBTENER);
    setArregloPerfiles(resultado);
    //  console.log(resultado);
    return resultado;
  };

  // Un nuevo concepto: useEffect
  useEffect(() => {
    obtenerPerfiles();
   
    
  }, [])

  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Perfiles</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de perfiles</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}
      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>Orden</th>
                  <th style={{ width: "65%" }}>Nombre perfil</th>
                  <th style={{ width: "15%" }}>Estado</th>
                  <th className="text-center" style={{ width: "10%" }}>Usuarios</th>
                </tr>
              </thead>
              <tbody>
                {
                  arregloPerfiles.map((perfil,index) => (
                      <tr key={perfil._id}>
                        <td>{index+1}</td>
                        <td>{perfil.nombrePerfil}</td>
                        <td>{perfil.estadoPerfil === 1?'Activo':'Inactivo'}</td>
                        <td className="text-center">{perfil.cantUsuarios}</td>
                      </tr>
                    )
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}


    </main>
  )
}
