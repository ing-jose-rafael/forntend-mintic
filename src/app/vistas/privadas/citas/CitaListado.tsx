import { useState, useEffect, useContext } from "react";

import Cita from "../../../modelos/Cita";
import ApiBack from "../../../utilidades/dominios/ApiBack";
import ServicioPrivado from "../../../servicios/ServicioPrivado";
import { obtenerFechaLocal, obtenerHora, } from "../../../utilidades/funciones/FormatoFecha";
import { ContextoUsuario } from "../../../seguridad/ContextoUsuario";

export const CitaListado = () => {
  // Info del usuario en sesión
  const miUsuario = useContext(ContextoUsuario);
  
  const codUsuario = String(miUsuario?.autenticado.codUsuario);
  
  const perfilUsuario = String(miUsuario?.autenticado.perfil);
  // Variables
  const [arregloCitas, setArregloCitas] = useState<Cita[]>([]);
  // ************************************************************************


  // Función para obtener perfiles
  const obtenerCitas = async () => {
    let resultado
    if (perfilUsuario !== 'Administrador') {
      
      resultado = await ServicioPrivado.peticionGET(ApiBack.CITAS_OBTENER+'/'+codUsuario);
      // console.log(resultado);
      
    } else {
      resultado = await ServicioPrivado.peticionGET(ApiBack.CITAS_OBTENER);
      
    }
    
      setArregloCitas(resultado);
    return resultado;
  };
  // ************************************************************************


  const obtenerEstado = (valor: number) => {
    let textoEstado = "";
    switch (valor) {
      case 1:
        textoEstado = "Pendiente";
        break;

      case 2:
        textoEstado = "Finalizada";
        break;
      case 3:
        textoEstado = "Cancelada";
        break;
      case 4:
        textoEstado = "No asistió";
        break;
      default:
        textoEstado = "No encontrado";
        break;
    }
    return textoEstado;
  };


  // Hook de react que se usa cuando se renderiza o pinta la página (vista)
  useEffect(() => {
    obtenerCitas();
  }, []);
  // ************************************************************************

  
  
  
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
                  <th className="text-center" style={{ width: "10%" }}>
                    Nro
                  </th>
                  <th style={{ width: "20%" }}>Fecha cita</th>
                  <th style={{ width: "55%" }}>Paciente - Médico</th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {arregloCitas.map((miUsu, indice) => (
                  
                  <tr key={indice}>
                    <td className="text-center">{indice + 1}</td>
                    <td>
                      {obtenerFechaLocal(miUsu.fechaRegistro)}
                      <br />
                      <small>{obtenerHora(miUsu.fechaRegistro)}</small>
                    </td>
                    <td>
                      <span className="text-success">Paciente:</span>{" "}
                      {miUsu.codPaciente.nombreUsuario}
                      <br />
                      <span className="text-primary">Médico:</span>{" "}
                      <small>{miUsu.codDoctor.nombreUsuario}</small>
                    </td>
                    <td className="text-center">
                      <small>{obtenerEstado(miUsu.estadoCita)}</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
