var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'host',
  port: '3306',
  user: 'user',
  password: 'password',
  database: 'database'
});

var loteo;
var query 
var j = 30000;
    for(i = 30000; i < 40000;i++){
        loteo = {id_loteo: i, nombre: 'loteo: '+i, ubicacion: 'elLugar'+i};
    query = connection.query('INSERT INTO loteo SET ?', loteo, function(err, result) {
      if(err){
          console.log(err);
      }else{
        console.log("OK: "+j);
        j++;

      }
    });
    console.log(query.sql);
}




/*
var query = "AUTOCOMMIT = 0;" +
            "SET FOREIGN_KEY_CHECKS = 0;" +
            "SET UNIQUE_CHECKS = 0;";

    query+= "INSERT INTO 'loteo' (id_loteo,nombre,ubicacion,cantidadDeTerrenos) VALUES ";

    query+= "(3,'asd','asd',0);";

var post  = {
  id_loteo: 3,
  nombre: 'asd',
  ubicacion: 'asd',
  cantidadDeTerrenos: 0
};

connection.query('INSERT INTO loteo VALUES ?', post, function (err, result) {
  if(err){
    console.log(err);
  }else{
    console.log(result);
    console.log("insersion correcta");
    connection.destroy();
  }
  
});


connection.query('SELECT 1', function (err, result) {
  if(err){
    console.log(err);
  }else{
    console.log(result);
    console.log("insersion correcta");
    connection.destroy();
  }
  
});
*/

