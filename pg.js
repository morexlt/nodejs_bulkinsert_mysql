var pgp = require('pg-promise')(/*options*/);

var cn = {
    host: 'host', // server name or IP address;
    port: 5432,
    database: 'database',
    user: 'user',
    password: 'password'
};
// alternative:
// var cn = "postgres://username:password@host:port/database";

var db = pgp(cn); // database instance;

// select and return user name from id:
//db.one("select name from users where id=$1", 123)


i = 3;

var loteo;
var queryLong = "INSERT INTO sdm_esquema1.loteo (id_loteo,nombre,ubicacion) VALUES ";


//var j = 99999;
    for(i = 3; i < 100000;i++){
        var query     = "("+i+",'nombre: "+i+"','elLugar"+i+"'),";
            query = "("+(i+100000)+",'nombre: "+(i+100000)+"','elLugar"+(i+100000)+"'),";
            query += "("+(i+200000)+",'nombre: "+(i+200000)+"','elLugar"+(i+200000)+"'),";
            query += "("+(i+300000)+",'nombre: "+(i+300000)+"','elLugar"+(i+300000)+"'),";
            query += "("+(i+400000)+",'nombre: "+(i+400000)+"','elLugar"+(i+400000)+"'),";
            query += "("+(i+500000)+",'nombre: "+(i+500000)+"','elLugar"+(i+500000)+"'),";
            query += "("+(i+600000)+",'nombre: "+(i+600000)+"','elLugar"+(i+600000)+"'),";
            query += "("+(i+700000)+",'nombre: "+(i+700000)+"','elLugar"+(i+700000)+"'),";
            query += "("+(i+800000)+",'nombre: "+(i+800000)+"','elLugar"+(i+800000)+"')";
            db.one(queryLong+query+';')
                .then(function (user) {
                    console.log(user.query); // print user name;
                })
                .catch(function (error) {
                    console.log(error); // print why failed;
                });
    }
    