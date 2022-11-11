
class CrearUsuario {
  public nombreUsuario: string;
  public correoUsuario: string;
  public claveUsuario: string;
  public cedulaUsuario: string;
  // private estadoUsuario: number;

  constructor(nom: string, ced:string,cor: string, cla: string) {
    this.nombreUsuario = nom;
    this.correoUsuario = cor;
    this.claveUsuario = cla;
    this.cedulaUsuario = ced;
    // this.estadoUsuario = 1;
  }
}

export default CrearUsuario;