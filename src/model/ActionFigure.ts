import { Produto } from "./Produto";

export class ActionFigure extends Produto {
  private _tamanho: string;
  private _colorido: number;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    tamanho: string,
    colorido: number
  ) {
    super(id, nome, tipo, preco);
    this._tamanho = tamanho;
    this._colorido = colorido;
  }

  public get tamanho(): string {
    return this._tamanho;
  }

  public get colorido(): number {
    return this._colorido;
  }

  public set tamanho(value: string) {
    this._tamanho = value;
  }

  public set colorido(value: number) {
    this._colorido = value;
  }

  public visualizar(): void {
    let colorido: string = "";
    super.visualizar();
    console.log(`Tamanho: ${this._tamanho}`);
    switch (this.colorido) {
      case 1:
        colorido = "Sim";
        break;
      case 2:
        colorido = "Não";
        break;
    }
    console.log(`Colorido: ${colorido}`);
  }
}
