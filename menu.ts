import readline = require("readline-sync");
import { Produto } from "./src/model/Produto";
import { Dados } from "./src/model/Dados";
import { Livros } from "./src/model/Livros";
import { ActionFigure } from "./src/model/ActionFigure";
    export function main(){

let opcao;
//TESTES *************************
let p1: Dados = new Dados(1,"Dado maneiro", 2, 100, 12,"roxo");
p1.visualizar();
let p2: Livros = new Livros(2,"Livro de Tormenta",1,80,"A maldicao aurea",1);
p2.visualizar();
let p3: ActionFigure = new ActionFigure(3,"kobold",3,100,"4 cm",2);
p3.visualizar();
//***********************************************
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
    console.log("\n**********************************************************");
    console.log("LOJA DE ERRE PE JÊ OS MELHORES PRODUTOS PARA RPG DE MESA!!");
    console.log("**********************************************************");
    0;
    about();
    process.exit(0);
  }
  switch (opcao) {
    case 1:
      console.log("\n Opcao 1 - Cadastrar Produtos");
      keyPress();
      break;
    case 2:
      console.log("\n Opcao 2 -Listar todos os Produtos");
      keyPress();
      break;
    case 3:
      console.log("\n Opcao 3 -Buscar Produto pelo ID");
      keyPress();
      break;
    case 4:
      console.log("\n Opcao 4 - Atualizar Produto");
      keyPress();
      break;
    case 5:
      console.log("\n Opcao 5 - Deletar produto ");
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