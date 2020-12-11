const { Client } = require('pg');


var connectionString = "postgres://postgres:0000@localhost:5433/OyeRickshaw";

const client = new Client({
    connectionString: connectionString
});

client.connect();

module.exports = client;
