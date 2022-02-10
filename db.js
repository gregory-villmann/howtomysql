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
    let sql = "SELECT * FROM customers WHERE name='John'";

    con.query(sql, function (err, res, fields){
        if(err) throw err;
        console.log(fields[0].name + ": " +res[0].name);
    });
});