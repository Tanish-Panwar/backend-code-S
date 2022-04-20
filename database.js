const postgre = require('pg');

// Configrations for postgre.
var config = {
    user: 'postgres', //env var: PGUSER
    host: 'localhost',
    database: 'postgres', // change to your database name
    password: '--Add Your Password--',  // Change this line according to your password
    port: 5432
};

// Creating a connection to postgre.
var pool = new postgre.Pool(config);

pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack); // eslint-disable-line no-console
});

pool.on('connect', function (err, client) {
    console.log("DB Connected");  // you can remove this line if you don't want to see the log
})

module.exports = pool;
