const express = require("express");
const app = express();
const PORT = 3000; // executar na porta 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});


function buscarTimesPorId(id){
    return times.filter((times) => times.id == id)
}


function buscarIdtimes(id){
  return times.findIndex((times) => times.id== id)

}



const times = [
  { id: 1, times: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, times: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, times: "Santos", estado: "SP", titulos: 8 },
  { id: 4, times: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, times: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, times: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, times: "Cruzeiro", estado: "MG", titulos: 4 },
];

app.get("/teste", (req, res)=>{
    res.send("API nodePeople está funcionando!");
});

app.get('/listaTimes',(req,res)=>{
    res.send(times);
});


app.get("/listaTimes/:id", (req, res)=>{
    let index = req.params.id;
   
   res.json(buscarTimesPorId(index))
})




app.delete("/del", (req, res)=>{
    let index = buscarIdtimes(req.params.id)
  times.splice(index, 1);
  res.send(`times com id ${req.params.id} excluida com sucesso!`);
});
