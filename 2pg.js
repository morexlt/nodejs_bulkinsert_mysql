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
var query;

i = 1;

var loteo;
var queryLong = "INSERT INTO sdm_esquema1.loteo (id_loteo,nombre,ubicacion) VALUES ";

//var j = 99999;
    for(i = 3; i < 100000;i++){
            query = "("+i+",'nombre: "+i+"','elLugar"+i+"'),";
            query += "("+(i+10000)+",'nombre: "+(i+10000)+"','elLugar"+(i+10000)+"'),";
            query += "("+(i+20000)+",'nombre: "+(i+20000)+"','elLugar"+(i+20000)+"'),";
            query += "("+(i+30000)+",'nombre: "+(i+30000)+"','elLugar"+(i+30000)+"'),";
            query += "("+(i+40000)+",'nombre: "+(i+40000)+"','elLugar"+(i+40000)+"'),";
            query += "("+(i+50000)+",'nombre: "+(i+50000)+"','elLugar"+(i+50000)+"'),";
            query += "("+(i+60000)+",'nombre: "+(i+60000)+"','elLugar"+(i+60000)+"'),";
            query += "("+(i+70000)+",'nombre: "+(i+70000)+"','elLugar"+(i+70000)+"'),";
            query += "("+(i+80000)+",'nombre: "+(i+80000)+"','elLugar"+(i+80000)+"'),";
            query += "("+(i+90000)+",'nombre: "+(i+90000)+"','elLugar"+(i+90000)+"'),";

            query += "("+(i+900000)+",'nombre: "+(i+900000)+"','elLugar"+(i+900000)+"'),";
            query += "("+(i+910000)+",'nombre: "+(i+910000)+"','elLugar"+(i+910000)+"'),";
            query += "("+(i+920000)+",'nombre: "+(i+920000)+"','elLugar"+(i+920000)+"'),";
            query += "("+(i+930000)+",'nombre: "+(i+930000)+"','elLugar"+(i+930000)+"'),";
            query += "("+(i+940000)+",'nombre: "+(i+940000)+"','elLugar"+(i+940000)+"'),";
            query += "("+(i+950000)+",'nombre: "+(i+950000)+"','elLugar"+(i+950000)+"'),";
            query += "("+(i+960000)+",'nombre: "+(i+960000)+"','elLugar"+(i+960000)+"'),";
            query += "("+(i+970000)+",'nombre: "+(i+970000)+"','elLugar"+(i+970000)+"'),";
            query += "("+(i+980000)+",'nombre: "+(i+980000)+"','elLugar"+(i+980000)+"'),";
            query += "("+(i+990000)+",'nombre: "+(i+990000)+"','elLugar"+(i+990000)+"')";

            db.one(queryLong+query+';')
                .then(function (user) {
                    console.log(user.query); // print user name;
                })
                .catch(function (error) {
                    console.log(error); // print why failed;
                });
    }
    