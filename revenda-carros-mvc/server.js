const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const clienteRoutes = require("./src/routes/clienteRoutes");
const veiculoRoutes = require("./src/routes/veiculoRoutes");
const vendaRoutes = require("./src/routes/vendaRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/clientes", clienteRoutes);
app.use("/api/veiculos", veiculoRoutes);
app.use("/api/vendas", vendaRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});