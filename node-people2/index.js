const express = require("express");
const app = express();
const PORT = 3000; // executar na porta 3000

// indicar para express ler o body com o json
app.use(express.json());


const times = [
  { id: 1, times: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, times: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, times: "Santos", estado: "SP", titulos: 8 },
  { id: 4, times: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, times: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, times: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, times: "Cruzeiro", estado: "MG", titulos: 4 },
];

function buscarTimesPorId(id){
  return times.filter((times) => times.id == id)
}


function buscarIdTimes(id){
  return times.findIndex((times) => times.id == id)
  
}

// Caso n encontre alguma rota
app.get("/", (req, res) => {
  res.send("digite um endereço valido");
});

//Busca os times
app.get('/listaTimes',(req,res)=>{
  res.send(times);
});

//buscando por id
app.get("/listaTimes/:id", (req,res)=>{
   let index = req.params.id;
   
   res.json(buscarTimesPorId(index))
})
// Para colcoar um time para jogar o bglh la
app.post("/listaTimes", (req, res)=>{
  times.push(req.body);
  res.status(201).send("Time adicionado com sucesso!");
})

//Rota alterar
app.put("/listaTimes/:id", (req, res) => {
  let index = buscarIdTimes(req.params.id);
  times[index].times = req.body.times;
  times[index].titulos = req.body.titulos;
  
  res.json(times);
})

// Rota para delete
app.delete("/listaTimes/:id", (req, res)=>{
  let id = req.params.id;
  let index = buscarIdTimes(id);

  // se nao encontrar, retorna o erro
  if(index === -1){
    return res.status(404).send(`Nenhum nome com id ${id} foi encontrado`)
  }
  times.splice(index, 1);
  res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});