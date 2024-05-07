const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  preco: { type: Number, required: true },
});

module.exports = mongoose.model("Produtos", produtoSchema);
