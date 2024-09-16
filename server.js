
var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');


var http = require('http').Server(app);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
const { exec } = require("child_process");
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

    let qry = `SELECT CODEMPRESA AS CODIGO, EMPRESA FROM EMPRESAS`;
    execute.Query(res,qry);

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

    const {filtro} = req.body;

  let qry = `
 SELECT EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                  CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES
FROM     CLIENTES LEFT OUTER JOIN
                  EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
      WHERE CLIENTES.NOMBRE LIKE '%${filtro}%' OR CLIENTES.CODIGO='${filtro}' 
  `

  execute.Query(res,qry);


}); 

app.post("/insert_cliente",function(req,res){

  const {codempresa,codigo,dpi,nombre,fecha,area,sector,tsalud,talimentos,tpulmones,f1,f2,f3} = req.body;


  let qry = `
    INSERT INTO CLIENTES (CODIGO,CODEMPRESA,DPI,NOMBRE,FECHA_NACIMIENTO,AREA_TRABAJO,SECTOR,TARJETA_SALUD,TARJETA_ALIMENTOS,
      TARJETA_PULMONES,FOTO_SELFIE,FOTO_DPI_1,FOTO_DPI_2) 
      SELECT '${codigo}' AS CODIGO, ${codempresa} AS CODEMPRESA, '${dpi}' AS DPI,
      '${nombre}' AS NOMBRE, '${fecha}' AS FECHA_NACIMIENTO, '${area}' AS AREA_TRABAJO,
      '${sector}' AS SECTOR, '${tsalud}' AS TARJETA_SALUD, '${talimentos}' AS TARJETA_ALIMENTOS,
      '${tpulmones}' AS TARJETA_PULMONES,'${f1}' AS FOTO_SELFIE,
      '${f2}' AS FOTO_DPI_1, '${f3}' AS FOTO_DPI_2

  `

  execute.Query(res,qry);

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

