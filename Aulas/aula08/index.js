const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://robsoncviana14:@cluster0.rfngpvf.mongodb.net/';

async function conectar() {
    const mongoClient = await MongoClient.connect(url);
    const db = mongoClient.db('loja');
    return db;
      
}
async function inserir(cliente) {
    const db = await conectar();
    const clientes = db.collection('clientes');
    return clientes.insertOne(cliente);
}

async function listar() {
    const db = await conectar();
    const clientes = db.collection('clientes');
    return clientes.find({}).toArray();
}

async function atualizar(){
    const db = await conectar();
    const clientes = db.collection('clientes');
    return clientes.updateOne({_id: ''}, {$set: {nome: 'Jose Maria'}});
}

async function remover(){
    const db = await conectar();
    const clientes = db.collection('clientes');
    return clientes.deleteOne({_id:""});
}

inserir({nome: 'Robson', telefone: '61 9999-9999'});