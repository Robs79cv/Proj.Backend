const express = require('express');

const app = express();

// middleware integrado
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware de app
app.use(function (req, res, next) {
    console.log("Data/Hora" , new Date());
    console.log("Url: ", req.url);
    console.log("Metodo: ", req.method);
    console.log("Parametros: ", req.params);
    console.log("Corpo: ", req.body);
    console.log("Cabecalho: ", req.headers);

    next();
});

// middleware de rota
app.get('/', function(req, res) {
   res.status(200).end();
 //   res.send("home");
 //   res.json({codigo: 200, mensagem: 'De boas'});
});

app.post('/', function(req, res){
    console.log(req.body);
    res.status(200).end();
});

app.put('/', function(req, res){
    res.status(204).end();

});

app.delete('/', (req, res) => {
    throw new Exception('erro');
});

// middleware de tratamento e erro
//app.use(function (error, req, res, next){
   // res.status(400).send({message: "Deu Ruuuim!!"})
//});

app.listen(3000, function(){
    console.log("API está ON!");
});

module.exports = app;
