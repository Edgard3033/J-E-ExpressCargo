const client = require("./client");

//imports
const { createUser } = require("./adapters/users");

//seedData
const { users } = require("./seedData");

async function dropTables() {
  console.log("Dropping tables...");
  try {
    await client.query(`
    DROP TABLE IF EXISTS jobs;
    DROP TABLE IF EXISTS trucks;
    DROP TABLE IF EXISTS companies;
    DROP TABLE IF EXISTS users;
    `);
  } catch (error) {
    console.error(error);
  }
}

async function createTables() {
  console.log("Creating tables...");
  try {
    // USERS TABLE
    await client.query(`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )
    `);

    //COMPANIES TABLE
    await client.query(`
    CREATE TABLE companies(
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      adress TEXT NOT NULL,
      contact_email TEXT
    )
    `);

    //TRUCKS TABLE
    await client.query(`
    CREATE TABLE trucks(
      id SERIAL PRIMARY KEY,
      truck_number INTEGER,
      make TEXT,
      model TEXT,
      year INTEGER
    )
    `);

    //JOBS TABLE
    await client.query(`
    CREATE TABLE jobs(
      id SERIAL PRIMARY KEY,
      company_id INTEGER REFERENCES companies(id),
      truck_id INTEGER REFERENCES trucks(id),
      title TEXT,
      description TEXT,
      location TEXT,
      compensation INTEGER
    )
    `);
  } catch (error) {
    console.log(error);
  }
}

async function populateTables() {
  console.log("Populating tables...");
  try {
    //USERS
    console.log("users");
    for (const user of users) {
      await createUser(user);
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = async function rebuildDb() {
  try {
    await dropTables();
    await createTables();
    await populateTables();
  } catch (error) {
    console.error(error);
  }
};
