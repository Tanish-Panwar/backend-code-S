const postgre = require('pg');

var databaseConfigrations = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'iamadminofall90@*.!',
    port: 5432
};



var pool = new postgre.Pool(databaseConfigrations);

pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});

pool.on('connect', function (client) {
    console.log('connected to postgres');
});


module.exports = pool;