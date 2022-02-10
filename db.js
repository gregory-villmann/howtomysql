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
    let sql = "INSERT INTO customers (name, address) VALUES ('Gregory OY', 'Puiestee 2a')";
    con.query(sql, function (err, res){
        if(err) throw err;
        console.log("Inserted into table" + res);
    });
});