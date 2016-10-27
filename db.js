var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'test',
    }
);
 
connection.connect();
 
var queryString = 'SELECT * FROM test_table';
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log('Name '+rows[i].id+': ', rows[i].name);
    }
});
 
connection.end();