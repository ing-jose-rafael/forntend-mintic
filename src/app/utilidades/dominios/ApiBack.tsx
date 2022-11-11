const ApiBack = {
  URL: 'https://minitic.herokuapp.com',
  // URL: 'http://localhost:3123',
  CREAR_USUARIO : "/api/login/registrarse",
  INICIAR_SESION: "/api/login/",

  PERFILES_OBTENER: "/api/perfil",
  PERFILES_CREAR: "/api/perfil",
  PERFILES_ELIMINAR: "/api/perfil",
  PERFILES_OBTENER_UNO: "/api/perfil",
  PERFILES_ACTUALIZAR: "/api/perfil",

  USUARIOS_CREAR: "/api/usuario",
  USUARIOS_OBTENER: "/api/usuario",
  USUARIOS_DOCTRS: "/api/usuario/perfil/doctors",
  USUARIOS_OBTENER_UNO: "/api/usuario",
  USUARIOS_ELIMINAR: "/api/usuario",
  USUARIOS_ACTUALIZAR: "/api/usuario",

  CITAS_CREAR: "/api/cita",
  CITAS_OBTENER: "/api/cita",
};

export default ApiBack;