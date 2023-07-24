const client = require("../client");

async function createCompany({ name, address, contact_email }) {
  const {
    rows: [company],
  } = await client.query(
    `
    INSERT INTO companies(name, address, contact_email)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [name, address, contact_email]
  );
  return company;
}

module.exports = {
  createCompany,
};
