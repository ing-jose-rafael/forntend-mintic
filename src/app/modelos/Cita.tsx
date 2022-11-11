import Usuario from "./Usuario";

class Cita {
  public _id: string;
  public codDoctor: Usuario;
  public codPaciente: Usuario;
  public fechaRegistro: Date;
  public estadoCita: number;

  constructor( id: string, codm: Usuario, codp: Usuario, feci: Date, esta: number ) {
    this._id = id;
    this.codDoctor = codm;
    this.codPaciente = codp;
    this.fechaRegistro = feci;
    this.estadoCita = esta;
  }
}

export default Cita;