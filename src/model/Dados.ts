import { Produto } from "./Produto";
export class Dados extends Produto{
    private _faces : number;
    private _cor : string;


	constructor(id: number, nome: string, tipo: number, preco: number,
        faces: number, cor: string) {
        super(id, nome, tipo, preco);
		this._faces = faces;
		this._cor = cor;
	}

	public get faces(): number {
		return this._faces;
	}

	public get cor(): string {
		return this._cor;
	}

	public set faces(value: number) {
		this._faces = value;
	}

	public set cor(value: string) {
		this._cor = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Faces: ${this._faces}`);
        console.log(`Cor: ${this.cor}`);
    }

}