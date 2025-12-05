import express from "express";
import conexao from "../infra/conexao";

const app = express();

app.get("/", (req, res) => {
    res.send("Olá Node js");
});

export default app;