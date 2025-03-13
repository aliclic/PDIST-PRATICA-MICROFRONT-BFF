const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/dados", async (req, res) => {
  try {
    const { data: produtos } = await axios.get("http://localhost:4001/produtos");
    const { data: usuarios } = await axios.get("http://localhost:4002/usuarios");

    res.json({ produtos, usuarios });
  } catch (error) {
    res.status(500).send("Erro ao buscar dados");
  }
});

app.listen(5000, () => console.log("🖥️ BFF rodando na porta 5000"));
