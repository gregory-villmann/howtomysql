let mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"qwerty",
    database: "mydb"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected");
    let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, res){
        if(err) throw err;
        console.log("Result:" + res);
    });
});