import { Produto } from "./Produto";
export class Livros extends Produto {
  private _campanha: string;
  private _capa: number;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    campanha: string,
    capa: number
  ) {
    super(id, nome, tipo, preco);
    this._campanha = campanha;
    this._capa = capa;
  }

  public get campanha(): string {
    return this._campanha;
  }

  public get capa(): number {
    return this._capa;
  }

  public set campanha(value: string) {
    this._campanha = value;
  }

  public set capa(value: number) {
    this._capa = value;
  }

  public visualizar(): void {
    super.visualizar();
    let capa: string = "";
    console.log(`Campanha: ${this._campanha}`);
    switch (this.capa) {
      case 1:
        capa = "Capa Dura";
        break;
      case 2:
        capa = "Capa Mole";
        break;
    }
	console.log(`Capa: ${capa}`);
  }
}
