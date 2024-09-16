
var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');


var http = require('http').Server(app);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 2024;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});




app.get("/",function(req,res){
  
	res.sendFile(path + 'index.html');
  
}); 



app.get("/login",function(req,res){
  res.redirect('/');
}); 

//EMPRESAS
//-------------------------------

app.post("/lista_empresas",function(req,res){

    //const {} = req.query;


}); 


app.post("/insert_empresa",function(req,res){

  //const {} = req.query;


});

app.post("/edit_empresa",function(req,res){

  //const {} = req.query;


}); 

app.post("/delete_empresa",function(req,res){

  //const {} = req.query;


}); 


//-------------------------------
//EMPRESAS



//CLIENTES
//-------------------------------

app.post("/listado_clientes",function(req,res){

  //const {} = req.query;


}); 

app.post("/insert_cliente",function(req,res){

  //const {} = req.query;


}); 


//-------------------------------
//CLIENTES



app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
});





http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

