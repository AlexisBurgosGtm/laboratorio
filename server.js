
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


app.post("/verify_codigo",function(req,res){

  const {codigo,codempresa} = req.body;

  let qry = `SELECT CODIGO, CODEMPRESA 
              FROM CLIENTES
              WHERE CODEMPRESA=${codempresa} AND CODIGO='${codigo}';`;

  execute.Query(res,qry);

}); 

app.post("/listado_clientes",function(req,res){

      const {filtro,lastupdate,st} = req.body;

      if(st=='PENDIENTES'){
            if(filtro=='TODOS'){
              qry = `
              SELECT top 350 CLIENTES.CODEMPRESA, EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                                CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES, ATENDIDO, ISNULL(LASTUPDATE,'2024-01-01') AS LASTUPDATE
              FROM     CLIENTES LEFT OUTER JOIN
                                EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
                    WHERE CLIENTES.LASTUPDATE <> '${lastupdate}'   
              `
            }else{
              qry = `
              SELECT top 350 CLIENTES.CODEMPRESA, EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                                CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES, ATENDIDO, ISNULL(LASTUPDATE,'2024-01-01') AS LASTUPDATE
              FROM     CLIENTES LEFT OUTER JOIN
                                EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
                    WHERE CLIENTES.NOMBRE LIKE '%${filtro}%' AND CLIENTES.LASTUPDATE <> '${lastupdate}' 
                    OR CLIENTES.CODIGO='${filtro}' AND CLIENTES.LASTUPDATE <> '${lastupdate}'  
                `
            }   
      }else{
          if(filtro=='TODOS'){
            qry = `
            SELECT top 350 CLIENTES.CODEMPRESA, EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                              CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES, ATENDIDO, ISNULL(LASTUPDATE,'2024-01-01') AS LASTUPDATE
            FROM     CLIENTES LEFT OUTER JOIN
                              EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
                  WHERE CLIENTES.LASTUPDATE = '${lastupdate}'   
            `
          }else{
            qry = `
            SELECT top 350 CLIENTES.CODEMPRESA, EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                              CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES, ATENDIDO, ISNULL(LASTUPDATE,'2024-01-01') AS LASTUPDATE
            FROM     CLIENTES LEFT OUTER JOIN
                              EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
                  WHERE CLIENTES.NOMBRE LIKE '%${filtro}%' AND CLIENTES.LASTUPDATE = '${lastupdate}' 
                  OR CLIENTES.CODIGO='${filtro}' AND CLIENTES.LASTUPDATE = '${lastupdate}'  
              `
          }   
      }


   

    execute.Query(res,qry);


}); 

app.post("/insert_cliente",function(req,res){

  const {codempresa,codigo,dpi,nombre,fechanacimiento,area,sector,tsalud,talimentos,tpulmones,f1,f2,f3,fecha} = req.body;


  let qry = `
    INSERT INTO CLIENTES (CODIGO,CODEMPRESA,DPI,NOMBRE,FECHA_NACIMIENTO,AREA_TRABAJO,SECTOR,TARJETA_SALUD,TARJETA_ALIMENTOS,
      TARJETA_PULMONES,FOTO_SELFIE,FOTO_DPI_1,FOTO_DPI_2,LASTUPDATE,ATENDIDO) 
      SELECT '${codigo}' AS CODIGO, ${codempresa} AS CODEMPRESA, '${dpi}' AS DPI,
      '${nombre}' AS NOMBRE, '${fechanacimiento}' AS FECHA_NACIMIENTO, '${area}' AS AREA_TRABAJO,
      '${sector}' AS SECTOR, '${tsalud}' AS TARJETA_SALUD, '${talimentos}' AS TARJETA_ALIMENTOS,
      '${tpulmones}' AS TARJETA_PULMONES,'${f1}' AS FOTO_SELFIE,
      '${f2}' AS FOTO_DPI_1, '${f3}' AS FOTO_DPI_2, '${fecha}' AS LASTUPDATE, 'NO' AS ATENDIDO 

  `

  execute.Query(res,qry);

}); 


app.post("/edit_cliente",function(req,res){

  const {codempresa,codigo,dpi,nombre,fechanacimiento,fecha,area,sector,tsalud,talimentos,tpulmones} = req.body;


  let qry = `
    UPDATE CLIENTES SET 
          DPI='${dpi}',
          NOMBRE='${nombre}',
          FECHA_NACIMIENTO='${fechanacimiento}',
          AREA_TRABAJO='${area}',
          SECTOR='${sector}',
          TARJETA_SALUD='${tsalud}',
          TARJETA_ALIMENTOS='${talimentos}',
        TARJETA_PULMONES='${tpulmones}',
        LASTUPDATE='${fecha}'
    WHERE
    CODEMPRESA=${codempresa} AND CODIGO='${codigo}'


    

  `

  execute.Query(res,qry);

}); 

app.post("/fotos_cliente",function(req,res){

  const {codempresa,codigo} = req.body;


  let qry = `
      SELECT FOTO_SELFIE, FOTO_DPI_1,FOTO_DPI_2 FROM CLIENTES WHERE CODEMPRESA='${codempresa}' AND CODIGO='${codigo}';

  `

  execute.Query(res,qry);

}); 


app.post("/datos_cliente",function(req,res){

  const {codempresa,codigo} = req.body;


  let qry = `
      SELECT CODEMPRESA,CODIGO,
            DPI,NOMBRE, FECHA_NACIMIENTO,
            AREA_TRABAJO, SECTOR,
            TARJETA_SALUD, TARJETA_ALIMENTOS,
            TARJETA_PULMONES,LASTUPDATE 
      FROM CLIENTES 
      WHERE CODEMPRESA='${codempresa}' AND CODIGO='${codigo}';

  `

  execute.Query(res,qry);

}); 


app.post("/update_fotos_cliente",function(req,res){

  const {codempresa,codigo,fecha,f1,f2,f3} = req.body;


  let qry = `
      UPDATE CLIENTES SET FOTO_SELFIE='${f1}', 
                          FOTO_DPI_1='${f2}',
                          FOTO_DPI_2='${f3}',
                          LASTUPDATE='${fecha}'  
      WHERE CODEMPRESA='${codempresa}' AND CODIGO='${codigo}';

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

