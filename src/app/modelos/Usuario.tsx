import Perfil from "./Perfil";

class Usuario {
  public _id: string;
  public nombreUsuario: string;
  public cedulaUsuario: string;
  public correoUsuario: string;
  public claveUsuario: string;
  public fechaRegistro: Date;
  public estadoUsuario: number;
  public nombreImagenUsuario: string;
  public avatar: string;
  public codPerfil: Perfil;

  constructor( id: string, nom: string, ced:string, cor: string, cla: string, fec: Date, est: number, nomi: string, ava: string, codp: Perfil ) {
    this._id = id;
    this.nombreUsuario = nom;
    this.cedulaUsuario = ced;
    this.correoUsuario = cor;
    this.claveUsuario = cla;
    this.fechaRegistro = fec;
    this.estadoUsuario = est;
    this.nombreImagenUsuario = nomi;
    this.avatar = ava;
    this.codPerfil = codp;
  }
}

export default Usuario;