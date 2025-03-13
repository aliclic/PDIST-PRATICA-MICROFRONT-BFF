const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [
  { id: 1, nome: "Alic", email: "alic@email.com" },
  { id: 2, nome: "Caio", email: "caio@email.com" }
];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.listen(4002, () => console.log("👤 Serviço de Usuários rodando na porta 4002"));
