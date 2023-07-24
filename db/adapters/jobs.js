const client = require("../client");

async function createJob({ title, description, location, compensation }) {
  const {
    rows: [job],
  } = await client.query(
    `
    INSERT INTO jobs(title, description, location, compensation)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [title, description, location, compensation]
  );
  return job;
}

module.exports = {
  createJob,
};
