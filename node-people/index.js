const express = require("express");
const app = express();
const PORT = 3000; // executar na porta 3000

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "70" },
];

// Criando fuçãoes auxiliares
// Retomar o objeto por id
function buscarNomePorId(id){
    return nomes.filter((nome) => nome.id == id)
}



app.get("/teste", (req, res) => {
    res.send("API nodePeople está funcionando!");
});
app.get("/", (req, res) => {
    res.send("digite um endereço valido");
});



// buscando nomes (listaNomes)
app.get('/ListaNomes',(req,res)=>{
    res.send(nomes);
})


//buscando por id
app.get("/listaNomes/:id", (req,res)=>{
   let index = req.params.id;
   
   res.json(buscarNomePorId(index))
})

app.listen(PORT, () => {
  console.log("Servidor rodando no endereço http://localhost:${PORT}");
});