import ApiBack from "../utilidades/dominios/ApiBack";

class ServicioPublico {
  /**
   * crearUsuario
   */
  public static async crearUsuario(miObjeto: any) {
    const dts = {
      method: 'POST',
      body: JSON.stringify(miObjeto),
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    };
    const url = ApiBack.URL + ApiBack.CREAR_USUARIO;
    //fetch('http://localhost:3123/api/usuario', options)
    const respuesta = fetch(url, dts)
      .then(response => response.json())
      .then(response => response)
      .catch(err => {
        console.error(err);
        return err;
      });
    return respuesta;
  }

  // Servicio para iniciar sesión
  // *******************************************************************
  public static async iniciarSesion(objeto: any) {
    
    const datosEnviar = {
      method: "POST",
      body: JSON.stringify(objeto),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    };
    const url = ApiBack.URL + ApiBack.INICIAR_SESION;
    const respuesta = fetch(url, datosEnviar)
      .then((respuesta) => respuesta.json())
      .then((datos) => datos)
      .catch((miError) => miError);
    return respuesta;
  }
}

export default ServicioPublico;