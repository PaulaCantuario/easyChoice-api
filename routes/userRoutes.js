const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

// Rota para listar usuários
router.get("/", async (req, res) => {
  try {
    const users = await userModel.buscaTodosUsuarios();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
});

// Rota para criar um novo usuário
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios." });
  }

  try {
    const userId = await userModel.criaUsuario(name, email);
    res.status(201).json({ message: "Usuário criado com sucesso.", userId });
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
});

module.exports = router;
