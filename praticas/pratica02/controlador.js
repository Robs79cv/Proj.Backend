const readline = require('readline-sync');

const Contato = require('./modelo');

const contatos = [];

function adicionarContato() {
    const nome = 
      readline.question('Informe o nome do contato: ');
    const email = 
      readline.question('Informe o email do contato: ');
    const telefone = 
      readline.question('Informe o telefone do contato: ');
    const novoContato = new Contato (nome, email, telefone);
    contatos.push(novoContato);
    readline.question("Pressione ENTER para continuar");
  }

function listarContatos() {
    contatos.forEach(contato => 
      console.log(contato.nome, contato.email, contato.telefone));
    readline.question("Pressione ENTER para continuar");
  }

  function buscarContato() {
    const nome = 
      readline.question("Informe o nome do contato: ");
    const buscaContato = 
      contatos.find(contato => contato.nome === nome);
    if (buscaContato) {
      console.log(buscaContato.nome, buscaContato.email, 
        buscaContato.telefone);
    } else {
      console.log("Contato não localizado");
    }
    readline.question("Pressione ENTER para continuar");
 }

 function atualizarContato() {
    const nome = 
    readline.question("Informe o nome do contato: ");
  const buscaContato = 
    contatos.find(contato => contato.nome === nome);
   if (buscaContato) {
        const email = 
          readline.question("Informe o novo email do contato: ");
          buscaContato.email = email;
    
  if (buscaContato) {
    const telefone = 
      readline.question("Informe o novo telefone do contato: ");
      buscaContato.telefone = telefone;
  } else {
    console.log("Contato não localizado");
  }
  readline.question("Pressione ENTER para continuar");    
    }
 }

 function removerContato() {
    const nome = readline.question("Informe o nome do contatro: ");
    const posicao = contatos.findIndex(contato => contato.nome === nome);
    if (posicao >=0) {
        contatos.splice(posicao, 1);
    } else {
        console.log("Contato não localizado");
    }
    readline.question("Pressione ENTER para continuar");
}

module.exports = { adicionarContato, listarContatos, buscarContato, atualizarContato, removerContato }
