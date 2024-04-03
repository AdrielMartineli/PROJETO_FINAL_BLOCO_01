import readline = require("readline-sync");
import { Produto } from "./src/model/Produto";
import { Dados } from "./src/model/Dados";
import { Livros } from "./src/model/Livros";
import { ActionFigure } from "./src/model/ActionFigure";
import { ProdutoController } from "./src/controller/ProdutoController";
export function main() {
  let opcao, id, preco, tipo: number;
  let nome;
  let face, cor;
  let capa:number, campanha;
  let colorido:number, tamanho;
  let resposta;
  let tipoProduto = [`Livros`,`Dados`,`Action Figure`]
  
  //TESTES *************************
  // let p1: Dados = new Dados(1,"Dado maneiro", 2, 100, 12,"roxo");
  // p1.visualizar();
  // let p2: Livros = new Livros(2,"Livro de Tormenta",1,80,"A maldicao aurea",1);
  // p2.visualizar();
  // let p3: ActionFigure = new ActionFigure(3,"kobold",3,100,"4 cm",2);
  // p3.visualizar();
  //***********************************************
  const produtoController: ProdutoController = new ProdutoController();
  produtoController.cadastrar(
    new Dados(produtoController.gerarId(), "Dado maneiro", 2, 100, 12, "roxo")
  );
  produtoController.cadastrar(
    new Livros(
      produtoController.gerarId(),
      "Livro de Tormenta",
      1,
      80,
      "A maldicao aurea",
      1
    )
  );
  produtoController.cadastrar(
    new ActionFigure(produtoController.gerarId(), "kobold", 3, 100, "4 cm", 2)
  );
  while (true) {
    console.log("**************************************************");
    console.log("                                                  ");
    console.log("               LOJA DE ERRE PE JÊ                 ");
    console.log("**************************************************");
    console.log("                                                  ");
    console.log("         1 - Cadastrar Produto                    ");
    console.log("         2 - Listar todos os Produtos             ");
    console.log("         3 - Buscar Produto pelo ID               ");
    console.log("         4 - Atualizar Produto                    ");
    console.log("         5 - Deletar produto                      ");
    console.log("         0 - Sair                                ");
    console.log("**************************************************");
    console.log("                                                  ");
    console.log("Escolha a opcao desejada: ");
    opcao = readline.questionInt("");
    if (opcao > 5 || opcao < 0) {
      console.log("Digite um numero entre 0 e 5!!");

      keyPress();
    }
    if (opcao == 0) {
      console.log(
        "\n**********************************************************"
      );
      console.log("LOJA DE ERRE PE JÊ OS MELHORES PRODUTOS PARA RPG DE MESA!!");
      console.log("**********************************************************");
      0;
      about();
      process.exit(0);
    }
    switch (opcao) {
      case 1:
        console.log("\n Opcao 1 - Cadastrar Produtos");
        nome = readline.question("Dogite o nome do Produto: ");
        tipo = readline.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
        preco = readline.questionFloat("Digite o preco: ");
        switch(tipo){
            case 1:
                campanha = readline.question("Digite o nome da campanha: ");
                do{
                resposta = readline.questionInt("1-Capa Dura // 2-Capa Mole: ")
                if(resposta<1 ||resposta >2)
                    console.log("Digite uma opcao valida");
                }while(resposta < 1 || resposta>2)
                capa = resposta;
                produtoController.cadastrar(new Livros(produtoController.gerarId(),nome,
                tipo, preco, campanha,capa));
                break;
            case 2:
                face = readline.questionInt("Digite a quantidade de Faces do dado: ");
                cor = readline.question("Digite a Cor do dado: ");
                produtoController.cadastrar(new Dados(produtoController.gerarId(),
                nome, tipo, preco,face,cor));
                break;
            case 3:
                tamanho = readline.question("Digite o Tamanho da Action Figure: ")
                do{
                    resposta = readline.questionInt("Colorido? 1-Sim// 2-Nao: ")
                    if(resposta<1 ||resposta >2)
                        console.log("Digite uma opcao valida");
                    }while(resposta < 1 || resposta>2)
                colorido = resposta;
                produtoController.cadastrar(new ActionFigure(produtoController.gerarId(),
                    nome,tipo,preco,tamanho,colorido));
                break;
                
        }
        keyPress();
        break;
      case 2:
        console.log("\n Opcao 2 -Listar todos os Produtos");
        produtoController.listarTodas();
        keyPress();
        break;
      case 3:
        console.log("\n Opcao 3 -Buscar Produto pelo ID");
        id = readline.questionInt("Digite o Id do Produto: ");
        produtoController.procurarPorId(id);
        keyPress();
        break;
      case 4:
        console.log("\n Opcao 4 - Atualizar Produto");
        
        id = readline.questionInt("Digite o Id do Produto: ");
        
        let produto = produtoController.buscarNoArray(id);
        if (produto !== null){
            nome = readline.question("Digite o Nome do Produto: ");
            tipo = produto.tipo;
            preco = readline.questionFloat("Digite o preco: ");
            switch(tipo){
                case 1:
                    campanha = readline.question("Digite o nome da campanha: ");
                    do{
                    resposta = readline.questionInt("1-Capa Dura // 2-Capa Mole: ")
                    if(resposta<1 ||resposta>2)
                        console.log("Digite uma opcao valida");
                    }while(resposta < 1 || resposta>2)
                    capa = resposta;
                    produtoController.atualizar(new Livros(id,nome,tipo, preco, campanha,capa));
                    break;
                case 2:
                    face = readline.questionInt("Digite a quantidade de Faces do dado: ");
                    cor = readline.question("Digite a Cor do dado: ");
                    produtoController.atualizar(new Dados(id,nome, tipo, preco,face,cor));
                    break;
                case 3:
                    tamanho = readline.question("Digite o Tamanho da Action Figure: ")
                    do{
                        resposta = readline.questionInt("Colorido? 1-Sim// 2-Nao: ")
                        if(resposta<1 ||resposta >2)
                            console.log("Digite uma opcao valida");
                        }while(resposta < 1 || resposta>2)
                    colorido = resposta;
                    produtoController.atualizar(new ActionFigure(id,nome,tipo,preco,tamanho,colorido));
                    break;
                    
            }
        }
        keyPress();
        break;
      case 5:
        console.log("\n Opcao 5 - Deletar produto ");
        id = readline.questionInt("Digite o Id do produto a ser deletado: ");
        produtoController.deletar(id);
        keyPress();
        break;
    }
  }
}
export function about(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Adriel Modesto Martineli");
  console.log("*****************************************************");
}
function keyPress(): void {
  console.log("\nPressione enter para continuar...");
  readline.prompt();
}
main();
