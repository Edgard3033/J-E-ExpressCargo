const { Client } = require("pg");

const dbName = `JEexpresscargo`;

const client = new Client({
  connectionString:
    process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
});

if (!client._connect) {
  client.connect();
}

module.exports = client;
