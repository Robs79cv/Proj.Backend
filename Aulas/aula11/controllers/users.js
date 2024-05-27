const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const Usuario = require("../models/users");

function cifrarSenha(senha, salt) {
  const hash = crypto.createHmac("sha256", salt);
  hash.update(senha);
  return hash.digest("hex");
}

async function criar(req, res) {
  const { email, senha } = req.body;
  const salt = crypto.randomBytes(16).toString("hex");
  const novoUsuario = await Usuario.create({
    email,
    senha: cifrarSenha(senha, salt),
    salt,
  });
  res.status(201).json({
    id: novoUsuario._id.toString(),
    email: novoUsuario.email,
    senha: novoUsuario.senha,
    salt: novoUsuario.salt,
  });
}

async function entrar(req, res) {
  const usuario = await Usuario.findOne({ email: req.body.email });
  if (usuario.senha === cifrarSenha(req.body.senha, usuario.salt)) {
    res.json({ token: jwt.sign({ email: usuario.email }, '12345678', { expiresIn: '1h' }) });
  } else {
    res.status(401).status({ msg: "acesso negado" });
  }
}

function renovar(req, res) {
  const token = req.headers['authorization'];

  if (token) {
    try {
      const payload = jwt.verify(token, '12345678');
      res.json({ token: jwt.sign({ email: payload.email }, '12345678') });
    } catch (error) {
      res.status(401).status({ msg: 'Token inválido' });
    }
  } else {
    res.status(401).status({ msg: 'Token não fornecido!!' });
  }
}

module.exports = { criar, entrar, renovar };
