const opcionesAdmin = [
  { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
  {
    nombre: "Citas", icono: "fa-thin fa-stethoscope", ruta: "/dashboard/about", hijos: [
      { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listma", },
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addma" },
      // { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admma", },
    ],
  },
  // {
  //   nombre: "Dotores", icono: "bi bi-clipboard2-pulse", ruta: "", hijos: [
  //     { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listdoctores", },
  //     { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addprofile" },
  //     { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admprofile", },
  //   ]
  // },

  {
    nombre: "Usuarios", icono: "bi bi-person-lines-fill", ruta: "", hijos: [
      { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listusers", },
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/adduser" },
      { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admuser", },
    ]
  },
  {
    nombre: "Perfil", icono: "bi bi-person-lines-fill", ruta: "", hijos: [
      { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listprofiles", },
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addprofile" },
      { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admprofile", },
    ]
  }
];

// *********************************************************************************

const opcionesPacientes = [
  { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
  {
    nombre: "Mis Citas", icono: "bi bi-clipboard-data", ruta: "", hijos: [
      { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listma", },
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addma" },
      // { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admma", },
    ]
  },
  { nombre: "Configuración", icono: "bi bi-gear", ruta: "/dashboard/config", hijos: [], },
];
const opcionesDoctor = [
  { nombre: "Dashboard", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
  { nombre: "Historico Citas", icono: "bi bi-clipboard-data", ruta: "", hijos: [], },
  { nombre: "Mi Agenda", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
  { nombre: "Pacientes", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
  { nombre: "Configuración de perfil", icono: "bi bi-grid", ruta: "/dashboard/config", hijos: [], },
];

export { opcionesAdmin, opcionesPacientes, opcionesDoctor };
