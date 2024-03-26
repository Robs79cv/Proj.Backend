const readline = require('readline-sync');

const controlador = require('./controlador');

function menu() {
  console.log('1. Listar');
  console.log('2. Criar');
  console.log('3. Buscar');
  console.log('4. Atualizar');
  console.log('5. Remover');
  console.log('6. Sair');
}

function escolherOpcao(opcao) {
  switch(opcao) {
    case '1': controlador.listar(); break;
    case '2': controlador.criar(); break;
    case '3': controlador.buscar(); break;
    case '4': controlador.atualizar(); break;
    case '5': controlador.remover(); break;
    case '6': process.exit(0);
    default : console.log('Opcao invalida');
  }
}

function main() {
  while(true) {
    menu();
    const opcao = readline.question("Entre com uma opcao: ");
    escolherOpcao(opcao);
  }
}

main();