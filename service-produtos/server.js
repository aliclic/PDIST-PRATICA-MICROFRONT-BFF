const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Smartphone", preco: 2000 }
];

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.listen(4001, () => console.log("🖥️ Serviço de Produtos rodando na porta 4001"));
