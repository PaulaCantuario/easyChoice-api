const express = require("express");
const router = express.Router();
const usuarioModels = require("../models/usuarioModels");

// Rota para listar usuários
router.get("/obterTodos", async (req, res) => {
  try {
    const users = await usuarioModels.obterTodos();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
});

// Rota para listar um único usuário
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usuarioModels.obterUnico(id);    
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuário." });
  }
});


// Rota para criar um novo usuário
router.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const idUsuario = await usuarioModels.criaUsuario(nome, email, senha);
    res.status(201).json({ message: "Usuário criado com sucesso.", idUsuario: idUsuario });
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
});

module.exports = router;
