const modelo = require("./modelo");

async function consultarContato(nome) {
    const contato = new modelo.Contato(nome);
    return await  modelo.consultar(contato);
}

async function incluirContato(nome, email, telefone) {
    const contato = new modelo.Contato(nome, email, telefone);
    return await modelo.inserir(contato);
}

async function atualizarContato(nome, email, telefone) {
    const contato = await consultarContato(nome);
    contato.email = email;
    contato.telefone = telefone;
    await modelo.alterar(contato);
    return contato;
}

async function removerContato(nome) {
    const contato = await consultarContato(nome);
    await modelo.deletar(contato);
    return contato
}

module.exports = {
    consultarContato,
    incluirContato,
    atualizarContato,
    removerContato,
};

