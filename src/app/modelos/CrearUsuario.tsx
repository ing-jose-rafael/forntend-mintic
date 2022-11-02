
class CrearUsuario {
  public nombreUsuario: string;
  public correoUsuario: string;
  public claveUsuario: string;
  // private estadoUsuario: number;

  constructor(nom: string, cor: string, cla: string) {
    this.nombreUsuario = nom;
    this.correoUsuario = cor;
    this.claveUsuario = cla;
    // this.estadoUsuario = 1;
  }
}

export default CrearUsuario;