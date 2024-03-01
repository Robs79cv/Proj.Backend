const readline = require('readline-sync');

const controlador = require('./controlador');

function menu() {
  console.log('1. adicionarcontato');
  console.log('2. listarContatos');
  console.log('3. buscarcontato');
  console.log('4. atualizarContato');
  console.log('5. removerContato');
  console.log('6. Sair');
}

function escolherOpcao(opcao) {
  switch(opcao) {
    case '1': controlador.adicionarContato(); break;
    case '2': controlador.listarContatos(); break;
    case '3': controlador.buscarContato(); break;
    case '4': controlador.atualizarContato(); break;
    case '5': controlador.removerContato(); break;
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